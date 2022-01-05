import FakeCertificateRepository from '../../../src/repositories/fakes/FakeCertificateRepository';
let repository: FakeCertificateRepository;

describe('CertificateService', () => {
  beforeEach(async () => {
    repository = new FakeCertificateRepository();
  });

  it('find by id sucess', async () => {
    expect(await repository.findById('1')).toBeDefined();
  });

  it('find by id fail', async () => {
    expect(await repository.findById('')).toBeUndefined();
  });

  it('create new certificate', async () => {
    expect(
      await repository.create({
        image: 'string',
        courseName: 'string',
        workload: 'string',
        studentName: 'string',
        dateConclusionStudent: new Date(),
        dateConclusionCourse: new Date(),
        qrCodeLink: 'string',
        studentId: 'string',
        courseId: 'string',
        partnerId: 'string',
        userId: 'string',
      }),
    ).toBeDefined();
  });

  it('create new certificate fail', async () => {
    expect(await repository.create(null)).toBeUndefined();
  });
});
