import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exhibit } from './entites/exhibit.entity';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';

@Injectable()
export class ExhibitsService {
    constructor(
        @InjectRepository(Exhibit)
        private exhibitsRepository: Repository<Exhibit>,
        private notificationsGateway: NotificationsGateway,
    ) {}

    async create(createDto: any, userId: number, filename: string) {
        const exhibit = this.exhibitsRepository.create({
            ...createDto,
            image: filename,
            userId,
        });

        const savedExhibit = await this.exhibitsRepository.save(exhibit);
        this.notificationsGateway.sendNotification('newPost', {
            message: 'New exhibit created!',
            description: savedExhibit.description,
            authorId: userId,
        });

        return savedExhibit;
    };

    async findAll() {
        return await this.exhibitsRepository.find({ relations: ['user'] });
    };

    async findOne(id: number) {
        return await this.exhibitsRepository.findOne({ where: { id }, relations: ['user'] });
    };

    async update(id: number, updateDto: any, filename: string) {
        const exhibit = await this.exhibitsRepository.findOne({ where: { id } });

        if (!exhibit) {
            return null;
        }

        const updatedExhibit = {
            ...exhibit,
            ...updateDto,
            image: filename || exhibit.image,
        };

        return await this.exhibitsRepository.save(updatedExhibit);
    };

    // only owner can delete
    async remove(id: number, userId: number) {
        return await this.exhibitsRepository.delete({ id, userId });
    };
};

