import { SongModelFactory } from '../db/song.model';
declare const songRoute: (modelFactory: SongModelFactory) => import("express-serve-static-core").Router;
export default songRoute;
