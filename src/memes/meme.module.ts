import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemeSchema } from './meme.schema';
import { MemeController } from './meme.controller';
import { MemeService } from './meme.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Meme', schema: MemeSchema }])],
  controllers: [MemeController],
  providers: [MemeService],
})
export class MemesModule {}
