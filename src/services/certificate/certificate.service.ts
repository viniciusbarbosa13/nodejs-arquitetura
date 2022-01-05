import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DEFAULT_LIST_PAGE_LIMIT } from '../../../src/common/Constants';
import Certificate from '../../../src/domain/certificate/Certificate';
import {
  CertificatePaginateParams,
  CreateCertificateDto,
  UpdateCertificateDto,
  ListCertificatePaginated,
} from '../../../src/domain/certificate/dto/certificate.dto';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  async create(createCertificateDto: CreateCertificateDto) {
    const certificate = this.certificateRepository.create(createCertificateDto);
    return await this.certificateRepository.save(certificate);
  }

  async getAll(params: CertificatePaginateParams): Promise<ListCertificatePaginated> {
    const [result, total] = await this.certificateRepository.findAndCount({
      order: { courseName: 'DESC' },
      take: parseInt(params.pageSize) || DEFAULT_LIST_PAGE_LIMIT,
      skip: (parseInt(params.page) - 1) * DEFAULT_LIST_PAGE_LIMIT,
    });

    return {
      data: result,
      total,
      page: parseInt(params.page),
    };
  }

  async getById(id: string) {
    const certificate = await this.certificateRepository.findOne(id);
    if (!certificate) {
      throw new NotFoundException('Certificado não encontrado');
    }
    return certificate;
  }

  async update(
    {
      image,
      courseName,
      studentName,
      dateConclusionStudent,
      dateConclusionCourse,
      studentId,
      courseId,
    }: UpdateCertificateDto,
    id: string,
  ) {
    const certificateDTO = await this.certificateRepository.findOne(id);
    if (!certificateDTO) {
      throw new NotFoundException('Certificado não encontrado');
    }

    certificateDTO.image = image;
    certificateDTO.courseName = courseName;
    certificateDTO.studentName = studentName;
    certificateDTO.dateConclusionStudent = dateConclusionStudent;
    certificateDTO.dateConclusionCourse = dateConclusionCourse;
    certificateDTO.studentId = studentId;
    certificateDTO.courseId = courseId;
    certificateDTO.updatedAt = new Date();
    try {
      await this.certificateRepository.save(certificateDTO);
      return certificateDTO;
    } catch (error) {
      throw new Error('Ocorreu um erro');
    }
  }

  async delete(id: string) {
    const certificate = await this.certificateRepository.findOne(id);
    if (!certificate) {
      throw new NotFoundException('Certificado não encontrado');
    }

    await this.certificateRepository.remove(certificate);
    return true;
  }
}
