import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import CertificateSettings from '../../../src/domain/certificate-settings/CertificateSettings';
import {
  CertificateSettingsPaginateParams,
  ListCertificateSettingsPaginated,
} from '../../../src/domain/certificate-settings/dto/CertificateSettings.dto';
import Certificate from '../../../src/domain/certificate/Certificate';
import FakeCertificateRepository from '../../../src/repositories/fakes/FakeCertificateRepository';
import { FakeCertificateSettingsRepository } from '../../../src/repositories/fakes/FakeCertificateSettingsRepository';
import { CertificateSettingsService } from '../../../src/services/certificate-settings/certificate-settings.service';
import { CertificateSettingsController } from '../certificate-settings/certificate-settings.controller';

describe('CertificateSettingsController', () => {
  let controller: CertificateSettingsController;
  let service: CertificateSettingsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CertificateSettingsController],
      providers: [
        CertificateSettingsService,
        {
          provide: getRepositoryToken(CertificateSettings),
          useClass: FakeCertificateSettingsRepository,
        },
        {
          provide: getRepositoryToken(Certificate),
          useClass: FakeCertificateRepository,
        },
      ],
    }).compile();

    controller = moduleRef.get<CertificateSettingsController>(CertificateSettingsController);
    service = moduleRef.get<CertificateSettingsService>(CertificateSettingsService);
  });

  it('should return an array of certificate settings', async () => {
    const result: ListCertificateSettingsPaginated = {
      data: null,
      total: 0,
      page: 0,
    };
    jest.spyOn(service, 'getAll').mockImplementation(async () => result);

    let params: CertificateSettingsPaginateParams;
    expect(await controller.getAll(params)).toBe(result);
  });
});
