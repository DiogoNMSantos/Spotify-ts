import mongoose, { InferSchemaType, Model, Schema } from 'mongoose';

const songSchema: Schema = new Schema<SongModel>({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  release: { type: Date, required: true },
  photo: { type: String, required: true },
  artist: { type: String, required: true },
});

type SongModel = InferSchemaType<typeof songSchema>;

export interface ModelFactory<T> {
  create(): Model<T>;
}

export class SongModelFactory implements ModelFactory<SongModel> {
  constructor(private readonly modelName: string = 'Song') {}

  create(): Model<SongModel> {
    return mongoose.model<SongModel>(this.modelName, songSchema);
  }
}

export const Song = mongoose.model<SongModel>('Song', songSchema);
