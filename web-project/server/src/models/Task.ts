import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StatusColumn } from "./StatusColumn";
import { TaskComment } from "./TaskComment";
import { User } from "./User";

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StatusColumn, {nullable: true})
  @JoinColumn({name: 'statuscolumn_id'})
  statusColumn: StatusColumn;

  @ManyToOne(() => User, {nullable: false})
  @JoinColumn({name: 'owner_id'})
  owner: User;

  @Column({nullable: false})
  title: string;

  @Column('text', {nullable: true})
  description: string;

  @Column()
  priority: number;

  @Column()
  percentage: number;

  @OneToMany(() => TaskComment, taskcomment => taskcomment.id, {
    eager: true,
    cascade: true
  })
  @JoinColumn({name: 'comment_id'})
  comments: TaskComment[];

  startDate: Date;
  endDate: Date;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'update_at'})
  updatedAt: Date;

}