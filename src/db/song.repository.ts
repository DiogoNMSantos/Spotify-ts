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

export const SongRepository: Model<SongModel> = mongoose.model<SongModel>('Song', songSchema);
