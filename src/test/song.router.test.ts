import request from 'supertest';

import server from '../index';

describe('Post /song', () => {
  it('posts songs', async () => {
    const res = await request(server).post('/song').send({
      title: 'The title',
      duration: 123,
      genre: 'The genre',
      release: 'the date',
      soundUrl: 'The song URL',
      photo: 'The photo',
      artist: 'The artist',
    });

    expect(res.statusCode).toBe(201);
  });
});
