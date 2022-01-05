import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import CertificateSettings from '../certificate-settings/CertificateSettings';

@Entity('certificate')
export class Certificate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  image: string;

  @Column()
  courseName: string;

  @Column()
  studentName: string;

  @Column('date')
  dateConclusionStudent: Date;

  @Column('date')
  dateConclusionCourse: Date;

  @Column()
  studentId: string;

  @Column()
  courseId: string;

  @OneToOne(() => CertificateSettings)
  @JoinColumn()
  certificateSettings: CertificateSettings;
}

export default Certificate;
