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

describe('POST /api/rooms', () => {
    let token: string;

      beforeAll(async () => {
            const res = await request(app)
                .post('/api/login')
                .send({ username: 'admin', password: 'admin' });

                console.log('Token obtenido en login:', res.body.token);

            token = res.body.token;
        });

    it('should create a new room', async () => {
        const newRoom = {
            roomId: "R001",
            roomNumber: "101",
            roomName: "Ocean View Suite",
            bedType: "King",
            roomFloor: "1",
            facilities: ["WiFi", "Air Conditioning", "Balcony", "Mini Bar"],
            rate: 150,
            roomImage: "https://example.com/images/room101.jpg",
            roomStatus: "Available",
            description: "Spacious suite with ocean views and a private balcony."
        };

        const response = await request(app)
            .post('/api/rooms')
            .set('Authorization', `Bearer ${token}`)
            .send(newRoom);

        console.log(response.body);

        expect(response.status).toBe(200); 
        expect(response.body).toHaveProperty('roomId', newRoom.roomId);
    });
});