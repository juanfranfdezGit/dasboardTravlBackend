import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const getBookingsData = (): any[] => {
    const dataPath = path.join(__dirname, '../datas/Booking.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

router.get('/', (req, res) => {
    const bookings = getBookingsData();
    res.json(bookings);
});

export default router;