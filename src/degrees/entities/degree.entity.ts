import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hierarchy } from './';

@Entity({ schema: 'public', name: 'degrees', synchronize: false })
export class Degree {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  shortened: string;

  @Column()
  correlative?: number;

  @Column()
  is_active: boolean;

  @ManyToOne(() => Hierarchy, (hierarchy) => hierarchy.degrees)
  @JoinColumn({ name: 'hierarchy_id' })
  hierarchy: Hierarchy;
}
