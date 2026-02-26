import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exhibit } from '../../exhibits/entites/exhibit.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Exhibit, (exhibit) => exhibit.user, { cascade: true })
    @ApiProperty({ type: () => [Exhibit], description: 'Exhibits added by the user' })
    exhibits!: Exhibit[];
};

