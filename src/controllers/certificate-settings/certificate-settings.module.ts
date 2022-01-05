import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Certificate from 'src/domain/certificate/Certificate';

import { CertificateSettingsService } from '../../../src/services/certificate-settings/certificate-settings.service';
import { CertificateSettings } from './../../domain/certificate-settings/CertificateSettings';
import { CertificateSettingsController } from './certificate-settings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CertificateSettings]), TypeOrmModule.forFeature([Certificate])],
  controllers: [CertificateSettingsController],
  providers: [CertificateSettingsService],
})
export class CertificateSettingsModule {}
