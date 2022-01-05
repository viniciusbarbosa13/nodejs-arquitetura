import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Certificate } from '../certificate/Certificate';

@Entity('certificate-settings')
export class CertificateSettings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('decimal')
  progressPercentage: number;

  @Column('decimal')
  courseApprovalPercentage: number;

  @Column()
  certificateId: string;

  @OneToOne(() => Certificate)
  @JoinColumn()
  certificate: Certificate;
}

export default CertificateSettings;
