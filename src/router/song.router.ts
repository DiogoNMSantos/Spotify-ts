import { Request, Response, Router } from 'express';
import { SongModelFactory, Song } from '../db/models/song.model';

const songRoute = (modelFactory: SongModelFactory) => {
  const router = Router();

  router.get('/', async (_: Request, res: Response) => {
    const songs = await modelFactory.create().find().exec();

    return res.status(200).json({ data: songs });
  });

  router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const songs = await modelFactory.create().findById(id).exec();

    return res.status(200).json({ data: songs });
  });

  router.post('/', async (req: Request, res: Response) => {
    const body = req.body;

    const data = {
      title: body.title,
      duration: body.duration,
      genre: body.genre,
      releaseDate: body.releaseDate,
      soundUrl: body.soundUrl,
      photo: body.photo,
      artist: body.artist,
      //album: body.album
    };

    const newSong = new Song(data);

    await newSong.save();

    const song = await new SongModelFactory().create().findById(newSong._id).populate({
      path: 'artist',
      select: 'name',
    }); /*.populate({path:'album',select:'name'})*/

    res.json(song);
  });

  return router;
};

export default songRoute;
