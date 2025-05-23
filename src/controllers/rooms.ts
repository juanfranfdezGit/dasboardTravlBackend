import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import getRoomsData from '../service/rooms';

const router = Router();

router.get('/', (req, res) => {
    const rooms = getRoomsData();
    res.json(rooms);
});

router.post('/', (req, res) => {
    const newRoom = req.body;

    const dataPath = path.join(__dirname, '../datas/Room.json');
    const rooms = getRoomsData();

    rooms.push(newRoom);

    fs.writeFileSync(dataPath, JSON.stringify(rooms, null, 2), 'utf-8');

    res.status(200).json(newRoom);
});

export default router;