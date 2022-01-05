import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import Certificate from '../../../src/domain/certificate/Certificate';
import {
  CertificatePaginateParams,
  ListCertificatePaginated,
} from '../../../src/domain/certificate/dto/certificate.dto';
import FakeCertificateRepository from '../../../src/repositories/fakes/FakeCertificateRepository';
import { CertificateService } from '../../../src/services/certificate/certificate.service';
import { CertificateController } from './certificate.controller';

describe('CertificateSettingsController', () => {
  let controller: CertificateController;
  let service: CertificateService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CertificateController],
      providers: [
        CertificateService,
        {
          provide: getRepositoryToken(Certificate),
          useClass: FakeCertificateRepository,
        },
        {
          provide: getRepositoryToken(Certificate),
          useClass: FakeCertificateRepository,
        },
      ],
    }).compile();

    controller = moduleRef.get<CertificateController>(CertificateController);
    service = moduleRef.get<CertificateService>(CertificateService);
  });

  it('should return an array of certificate', async () => {
    const result: ListCertificatePaginated = {
      data: null,
      total: 0,
      page: 0,
    };
    jest.spyOn(service, 'getAll').mockImplementation(async () => result);

    let params: CertificatePaginateParams;
    expect(await controller.getAll(params)).toBe(result);
  });
});
