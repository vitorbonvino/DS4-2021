import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Project } from "./Project";

@Entity('statuscolumn')
export class StatusColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, {nullable: false})
  @JoinColumn({name: 'project_id'})
  project: Project;

  @Column({nullable: false, length: 20})
  name: string;

  @Column({nullable: false, length: 7})
  color: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'update_at'})
  updatedAt: Date;
}