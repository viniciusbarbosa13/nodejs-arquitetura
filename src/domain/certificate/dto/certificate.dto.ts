import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import Certificate from '../Certificate';

export class CreateCertificateDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro image deve ser informado',
  })
  image: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro courseName deve ser informado',
  })
  courseName: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro studentName deve ser informado',
  })
  studentName: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro dateConclusionStudent deve ser informado',
  })
  dateConclusionStudent: Date;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro dateConclusionCourse deve ser informado',
  })
  dateConclusionCourse: Date;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro studentId deve ser informado',
  })
  studentId: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro courseId deve ser informado',
  })
  courseId: string;
}

export class UpdateCertificateDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro image deve ser informado',
  })
  image: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro courseName deve ser informado',
  })
  courseName: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro studentName deve ser informado',
  })
  studentName: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro dateConclusionStudent deve ser informado',
  })
  dateConclusionStudent: Date;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro dateConclusionCourse deve ser informado',
  })
  dateConclusionCourse: Date;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro studentId deve ser informado',
  })
  studentId: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro partnerId deve ser informado',
  })
  courseId: string;

  updatedAt: Date;
}

export class CertificatePaginateParams {
  @ApiProperty()
  @IsNotEmpty({
    message: 'O parâmetro page deve ser informado',
  })
  page: string;

  @ApiProperty()
  pageSize: string;
}

export interface ListCertificatePaginated {
  data: Certificate[];

  total: number;

  page: number;
}
