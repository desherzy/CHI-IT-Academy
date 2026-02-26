import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { Controller, 
    Post, 
    Body, 
    UseInterceptors, 
    UploadedFile,
    UseGuards, 
    Request 
} from '@nestjs/common';

import { ApiBearerAuth, 
    ApiConsumes, 
    ApiOperation, 
    ApiResponse, 
    ApiBody, 
    ApiTags 
} from '@nestjs/swagger';

@ApiTags('exhibits')
@Controller('exhibits')
export class ExhibitsController {
    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const filename: string = `${uuidv4()}${path.extname(file.originalname)}`;
                cb(null, filename);
            }
        })
    }))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: 'Create a new exhibit' })
    @ApiResponse({ status: 201, description: 'Exhibit created successfully.' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                image: { type: 'string', format: 'binary' },
                description: { type: 'string' },
            },
        },
    })
    async createExhibit(@UploadedFile() file: Express.Multer.File, @Body('description') description: string, @Request() req) {
        return { filename: file.filename, description };
    };
};

