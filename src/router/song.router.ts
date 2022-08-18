import { Request, Response, Router } from 'express';

import { SongModelFactory } from '../db/song.model';

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

  return router;
};

export default songRoute;
