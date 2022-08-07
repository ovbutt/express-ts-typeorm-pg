import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isDone: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP(6)', nullable: true })
  updatedAt: Date;
}
