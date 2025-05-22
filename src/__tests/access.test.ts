import request from 'supertest';
import express from 'express';
import roomsRouter from '../controllers/rooms';
import loginRouter from '../controllers/login';
import { authenticateJWT } from '../middleware/authenticateJWT';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/login', loginRouter);

app.use(authenticateJWT);

app.use('/api/rooms', roomsRouter);

describe('Acceso a rutas protegidas', () => {
  it('Debe rechazar acceso sin token (401 o 403)', async () => {
        const response = await request(app).get('/api/rooms'); 

        expect([401, 403]).toContain(response.status);
        expect(response.body).toHaveProperty('message');
  });

  it('Debe rechazar acceso con token inválido', async () => {
        const response = await request(app)
            .get('/api/rooms')
            .set('Authorization', 'Bearer token_invalido');

        expect(response.status).toBe(403);
        expect(response.body).toHaveProperty('message', 'Token inválido o expirado');
  });
});