import { Request, Response, Router } from 'express';

import { SongRepository } from '../db/song.repository';

const songRoute = () => {
  const router = Router();

  router.get('/', async (_: Request, res: Response) => {
    const songs = await SongRepository.find().exec();

    return res.status(200).json({ data: songs });
  });

  router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const songs = await SongRepository.findById(id).exec();

    return res.status(200).json({ data: songs });
  });

  return router;
};

export default songRoute;
