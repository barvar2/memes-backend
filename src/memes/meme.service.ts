import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meme, MemeDocument } from './meme.schema';
import { CreateMemeDto } from './dto/create-meme.dto';

@Injectable()
export class MemeService {
  constructor(@InjectModel(Meme.name) private memeModel: Model<MemeDocument>) {}

  // Fetch memes with pagination
  async findAll(page: number = 1): Promise<Meme[]> {
    const memesPerPage = 10; // Number of memes per page
    return this.memeModel
      .find()
      .skip((page - 1) * memesPerPage) // Skip memes based on the page number
      .limit(memesPerPage) // Limit the number of memes per page
      .exec();
  }

  // Add a new meme
  async create(createMemeDto: CreateMemeDto): Promise<Meme> {
    const meme = new this.memeModel(createMemeDto);
    return meme.save();
  }

  // Update meme name in MongoDB
  async updateMeme(id: string, newName: string): Promise<Meme | null> {
    return this.memeModel.findByIdAndUpdate(id, { name: newName }, { new: true });
  }
}
