import { Entity,  
    Column, 
    ManyToOne, 
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Expose } from 'class-transformer';

@Entity()
export class Exhibit {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;

    @Column()
    image!: string;

    @Expose()
    @ManyToOne(() => User, (user) => user.exhibits, { eager: true })
    @JoinColumn({ name: 'userId' })
    user!: User;

    @Column()
    userId!: number;
};

