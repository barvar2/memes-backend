import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemeDocument = Meme & Document & { _id: string }; // Explicitly define _id as string

@Schema({ timestamps: true }) // Automatically adds createdAt & updatedAt
export class Meme {
  @Prop({ required: true, unique: true }) // Ensure name is unique
  name: string;

  @Prop({ required: true }) // Image URL is required
  url: string;
}

export const MemeSchema = SchemaFactory.createForClass(Meme);
