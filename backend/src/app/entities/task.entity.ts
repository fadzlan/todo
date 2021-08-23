import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';


@Entity()
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(type => User, {nullable: false})
    author: User;

    @Column()
    name: string;

    @Column({ default: false})
    completed: boolean;

}