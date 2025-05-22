import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const getRoomsData = (): any[] => {
    const dataPath = path.join(__dirname, '../datas/Room.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

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