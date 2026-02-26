import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Exhibit } from '../../exhibits/entites/exhibit.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty({ example: 'That is very beautiful exhibit' })
    @Column()
    text!: string;
    
    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User)
    user!: User;

    @Column()
    userId!: number;

    @ManyToOne(() => Exhibit, (exhibit) => exhibit.comments, { onDelete: 'CASCADE' })
    exhibit!: Exhibit;

    @Column()
    exhibitId!: number;
};

