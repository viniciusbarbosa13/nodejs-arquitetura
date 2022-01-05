import { Certificate } from 'src/domain/certificate/Certificate';
import {
  CertificatePaginated,
  ICreateRequest,
  PaginateParams,
} from 'src/services/certificate/dto/CertificateDto';
import { EntityRepository, Repository, getRepository } from 'typeorm';

import { ICertificateRepository } from './interfaces/ICertificateRepository';

@EntityRepository(Certificate)
export class CertificateRepository implements ICertificateRepository {
  private ormRepository: Repository<Certificate>;
  constructor() {
    this.ormRepository = getRepository(Certificate);
  }
  public async update(
    certificate: Certificate,
  ): Promise<Certificate | undefined> {
    return await this.ormRepository.save(certificate);
  }

  public async remove(certificate: Certificate): Promise<void> {
    await this.ormRepository.remove(certificate);
  }

  public async create(
    createRequest: ICreateRequest,
  ): Promise<Certificate | undefined> {
    return await this.ormRepository.save(
      this.ormRepository.create(createRequest),
    );
  }

  public async findById(id: string): Promise<Certificate | undefined> {
    return await this.ormRepository.findOne(id);
  }

  public async findAndCount(
    params: PaginateParams,
  ): Promise<CertificatePaginated> {
    const [result, total] = await this.ormRepository.findAndCount({
      order: { courseName: 'DESC' },
      take: 10,
      skip: (parseInt(params.page) - 1) * 10,
      where: {
        partnerId: params.partnerId,
        userId: params.userId,
      },
    });

    return {
      data: result,
      total,
      page: parseInt(params.page),
    };
  }

  public async findByStudentName(
    studentName: string,
  ): Promise<Certificate | undefined> {
    const certificate = this.ormRepository.findOne({
      where: {
        studentName,
      },
    });

    return certificate;
  }
}
