import { InferSchemaType, Model, Schema } from 'mongoose';
declare const songSchema: Schema;
declare type SongModel = InferSchemaType<typeof songSchema>;
export interface ModelFactory<T> {
    create(): Model<T>;
}
export declare class SongModelFactory implements ModelFactory<SongModel> {
    private readonly modelName;
    constructor(modelName?: string);
    create(): Model<SongModel>;
}
export {};
