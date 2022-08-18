import { InferSchemaType, Model, Schema } from 'mongoose';
declare const songSchema: Schema;
declare type SongModel = InferSchemaType<typeof songSchema>;
export declare const SongRepository: Model<SongModel>;
export {};
