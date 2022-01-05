import { Certificate } from 'src/domain/certificate/Certificate';
import {
  CertificatePaginated,
  ICreateRequest,
  PaginateParams,
} from 'src/services/certificate/dto/CertificateDto';

export interface ICertificateRepository {
  findByStudentName(studentName: string): Promise<Certificate | undefined>;
  findAndCount(params: PaginateParams): Promise<CertificatePaginated>;
  findById(id: string): Promise<Certificate | undefined>;
  create(createRequest: ICreateRequest): Promise<Certificate | undefined>;
  update(certificate: Certificate): Promise<Certificate | undefined>;
  remove(certificate: Certificate): Promise<void>;
}
