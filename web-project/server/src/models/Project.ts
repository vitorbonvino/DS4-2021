import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StatusColumn } from "./StatusColumn";
import { Task } from "./Task";
import { User } from "./User";

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => User, {nullable: false})
  @JoinColumn({name: 'owner_id'})
  owner: User;

  statusColumn: StatusColumn[];
  tasks: Task[];

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'update_at'})
  updatedAt: Date;
}