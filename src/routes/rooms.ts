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

export default router;