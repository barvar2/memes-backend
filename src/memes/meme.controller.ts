import { Controller, Get, Query, Param, Post, Body, Put } from '@nestjs/common';
import { MemeService } from './meme.service';
import { CreateMemeDto } from './dto/create-meme.dto';

@Controller('memes')
export class MemeController {
  constructor(private readonly memeService: MemeService) {}

  // Fetch memes with pagination (passing page as query parameter)
  @Get()
  async getAllMemes(@Query('page') page: number = 1) {
    return this.memeService.findAll(page); // Pass page to service for pagination
  }

  // Add a new meme to the database
  @Post()
  async createMeme(@Body() createMemeDto: CreateMemeDto) {
    return this.memeService.create(createMemeDto);
  }

  // Update meme name in MongoDB
  @Put(':id')
  async updateMeme(
    @Param('id') id: string,
    @Body() updateMemeDto: { name: string },
  ) {
    return this.memeService.updateMeme(id, updateMemeDto.name);
  }
}
