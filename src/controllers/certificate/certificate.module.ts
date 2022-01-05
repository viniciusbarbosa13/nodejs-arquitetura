import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Certificate from 'src/domain/certificate/Certificate';
import { CertificateService } from 'src/services/certificate/certificate.service';

import { CertificateController } from './certificate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Certificate])],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificateModule {}
