import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CertificateSettings } from 'src/domain/certificate-settings/CertificateSettings';
import { Certificate } from 'src/domain/certificate/Certificate';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificateSettingsModule } from './controllers/certificate-settings/certificate-settings.module';
import { CertificateModule } from './controllers/certificate/certificate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'api-certificados',
      entities: [Certificate, CertificateSettings],
      synchronize: false,
      migrationsRun: false,
      migrations: ['dist/database/migrations/*.js'],
      cli: {
        migrationsDir: 'dist/database/migrations',
      },
    }),
    CertificateModule,
    CertificateSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
