import { Controller, Post, Body, UseGuards, Request, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    @ApiOperation({ summary: 'Add comment to exhibit' })
    @Post()
    async create(@Body() body: { text: string, exhibitId: number }, @Request() req) {
        return this.commentsService.create(body.text, req.user.id, body.exhibitId);
    }

    @Get('exhibit/:id')
    @ApiOperation({ summary: 'Get all comments by the exhibit' })
    async findAllByExhibit(@Param('id') id: number) {
        return this.commentsService.findByExhibit(id);
    }
};

