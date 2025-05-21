import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const getGuestsData = (): any[] => {
    const dataPath = path.join(__dirname, '../datas/Guest.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

router.get('/', (req, res) => {
    const guests = getGuestsData();
    res.json(guests);
});

export default router;