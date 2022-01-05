import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import CertificateSettings from '../CertificateSettings';

export class CreateCertificateSettingsDto {
  @ApiProperty()
  @IsNotEmpty()
  progressPercentage: number;

  @ApiProperty()
  @IsNotEmpty()
  courseApprovalPercentage: number;

  @ApiProperty()
  @IsNotEmpty()
  certificateId: string;
}

export class UpdateCertificateSettingsDto {
  @ApiProperty()
  @IsNotEmpty()
  progressPercentage: number;

  @ApiProperty()
  @IsNotEmpty()
  courseApprovalPercentage: number;

  updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  certificateId: string;
}

export class ListCertificateSettingsPaginated {
  @ApiProperty()
  @IsNotEmpty()
  data: CertificateSettings[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  @IsNotEmpty()
  page: number;
}

export class CertificateSettingsPaginateParams {
  @ApiProperty()
  @IsNotEmpty()
  page: string;

  @ApiProperty()
  @IsNotEmpty()
  certificateId: string;
}
