import { ListCertificateSettingsPaginated } from 'src/domain/certificate-settings/dto/CertificateSettings.dto';

export class FakeCertificateSettingsRepository {
  public async getAll(): Promise<ListCertificateSettingsPaginated> {
    return null;
  }
}
