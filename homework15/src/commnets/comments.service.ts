import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comments.entity';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {}

    async create(text: string, userId: number, exhibitId: number) {
        const comment = this.commentRepository.create({
            text,
            userId,
            exhibitId,
        });

        return await this.commentRepository.save(comment);
    };

    async findByExhibit(exhibitId: number) {
        return await this.commentRepository.find({
            where: { exhibitId },
            relations: ['user'],
            order: { createdAt: 'DESC' },
        })
    }
};

