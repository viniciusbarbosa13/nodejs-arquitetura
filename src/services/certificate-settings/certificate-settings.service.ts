import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DEFAULT_LIST_PAGE_LIMIT } from '../../../src/common/Constants';
import CertificateSettings from '../../../src/domain/certificate-settings/CertificateSettings';
import {
  CertificateSettingsPaginateParams,
  CreateCertificateSettingsDto,
  ListCertificateSettingsPaginated,
  UpdateCertificateSettingsDto,
} from '../../../src/domain/certificate-settings/dto/CertificateSettings.dto';
import Certificate from '../../../src/domain/certificate/Certificate';

@Injectable()
export class CertificateSettingsService {
  constructor(
    @InjectRepository(CertificateSettings)
    private readonly repository: Repository<CertificateSettings>,

    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  async create(createDto: CreateCertificateSettingsDto) {
    const certificate = await this.certificateRepository.findOne(createDto.certificateId);

    if (!certificate) {
      throw new NotFoundException('Certificado não encontrado');
    }

    const certificateSettings = this.repository.create(createDto);
    certificateSettings.certificate = certificate;
    return await this.repository.save(certificateSettings);
  }

  async getAll(params: CertificateSettingsPaginateParams): Promise<ListCertificateSettingsPaginated> {
    const [result, total] = await this.repository.findAndCount({
      order: { createdAt: 'DESC' },
      take: DEFAULT_LIST_PAGE_LIMIT,
      skip: (parseInt(params.page) - 1) * DEFAULT_LIST_PAGE_LIMIT,
      where: {
        certificateId: params.certificateId,
      },
    });

    return {
      data: result,
      total,
      page: parseInt(params.page),
    };
  }

  async getById(id: string) {
    const certificateSettings = await this.repository.findOne(id);
    if (!certificateSettings) {
      throw new NotFoundException('Configuração de Certificado não encontrado');
    }
    return certificateSettings;
  }

  async update(
    { progressPercentage, courseApprovalPercentage, certificateId }: UpdateCertificateSettingsDto,
    id: string,
  ) {
    const certificateSettings = await this.repository.findOne(id);
    if (!certificateSettings) {
      throw new NotFoundException('Configuração de Certificado não encontrado');
    }

    certificateSettings.updatedAt = new Date();
    certificateSettings.progressPercentage = progressPercentage;
    certificateSettings.courseApprovalPercentage = courseApprovalPercentage;

    try {
      const certificate = await this.certificateRepository.findOne(certificateId);

      if (!certificate) {
        throw new NotFoundException('Certificado não encontrado');
      }

      certificateSettings.certificate = certificate;

      await this.repository.save(certificateSettings);
      return certificateSettings;
    } catch (error) {
      throw new Error('Ocorreu um erro');
    }
  }

  async delete(id: string) {
    const certificateSettings = await this.repository.findOne(id);
    if (!certificateSettings) {
      throw new NotFoundException('Configuração de Certificado não encontrado');
    }

    const certificate = await this.certificateRepository.findOne({
      certificateSettings: certificateSettings,
    });

    if (certificate) {
      throw new NotFoundException(
        'Não é possivel deletar uma Configuração de Certificado que está sendo utilizada em outro certificado!',
      );
    }

    await this.repository.remove(certificateSettings);
    return true;
  }
}
