import { Certificate } from 'src/domain/certificate/Certificate';
import { CertificatePaginated, ICreateRequest, PaginateParams } from 'src/services/certificate/dto/CertificateDto';
import { v4 as uuidv4 } from 'uuid';

class FakeCertificateRepository {
  public async update(certificate: Certificate): Promise<Certificate | undefined> {
    return certificate;
  }

  public async remove(certificate: Certificate): Promise<Certificate> {
    return certificate;
  }

  public async create(createRequest: ICreateRequest): Promise<Certificate | undefined> {
    if (createRequest === null) {
      return undefined;
    }

    const certificate: Certificate = {
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      image: createRequest.image,
      courseName: createRequest.courseName,
      studentName: createRequest.studentName,
      dateConclusionStudent: new Date(),
      dateConclusionCourse: new Date(),
      studentId: createRequest.studentId,
      courseId: createRequest.courseId,
      certificateSettings: null,
    };

    return certificate;
  }

  public async findById(id: string): Promise<Certificate | undefined> {
    if (!id) {
      return undefined;
    }

    return {
      id: id,
      image: 'image',
      courseName: 'courseName',
      studentName: 'studentName',
      dateConclusionStudent: new Date(),
      dateConclusionCourse: new Date(),
      createdAt: new Date(),
      updatedAt: null,
      certificateSettings: null,
      studentId: 'studentId',
      courseId: 'courseId',
    };
  }

  public async findAndCount(params: PaginateParams): Promise<CertificatePaginated> {
    return {
      data: [
        {
          id: uuidv4(),
          image: 'image',
          courseName: 'courseName',
          studentName: 'studentName',
          dateConclusionStudent: new Date(),
          dateConclusionCourse: new Date(),
          createdAt: new Date(),
          updatedAt: null,
          certificateSettings: null,
          studentId: 'studentId',
          courseId: 'courseId',
        },
      ],
      total: 1,
      page: parseInt(params.page),
    };
  }

  public async findByStudentName(studentName: string): Promise<Certificate | undefined> {
    return {
      id: uuidv4(),
      image: 'image',
      courseName: 'string',
      studentName: studentName,
      dateConclusionStudent: new Date(),
      dateConclusionCourse: new Date(),
      createdAt: new Date(),
      updatedAt: null,
      certificateSettings: null,
      studentId: 'string',
      courseId: 'string',
    };
  }
}

export default FakeCertificateRepository;
