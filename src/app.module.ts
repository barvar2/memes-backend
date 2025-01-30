import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MemesModule } from './memes/meme.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env variables
    MongooseModule.forRoot(process.env.MONGO_URI as string), // Connect to MongoDB
    MemesModule,
  ],
})
export class AppModule {}
