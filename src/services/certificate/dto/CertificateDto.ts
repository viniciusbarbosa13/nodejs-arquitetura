import { Certificate } from 'src/domain/certificate/Certificate';

export interface ICreateRequest {
  image: string;
  courseName: string;
  workload: string;
  studentName: string;
  dateConclusionStudent: Date;
  dateConclusionCourse: Date;
  qrCodeLink: string;
  studentId: string;
  courseId: string;
  partnerId: string;
  userId: string;
}

export interface IUpdateRequest {
  image: string;
  courseName: string;
  workload: string;
  studentName: string;
  dateConclusionStudent: Date;
  dateConclusionCourse: Date;
  qrCodeLink: string;
  studentId: string;
  courseId: string;
  id: string;
  partnerId: string;
  userId: string;
}

export interface IGetByIdRequest {
  id: string;
}

export interface CertificatePaginated {
  data: Certificate[];
  total: number;
  page: number;
}

export interface PaginateParams {
  page: string;
  partnerId: string;
  userId: string;
}
