import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity('taskcomment')
export class TaskComment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, {nullable: false})
  @JoinColumn({name: 'user_id'})
  user: User;

  description: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'update_at'})
  updatedAt: Date;
}