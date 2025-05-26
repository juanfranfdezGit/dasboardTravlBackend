import { Router } from 'express';
import Booking from '../database/models/booking';
import '../database/models/room';
import '../database/models/guest';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('room').populate('guest');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las reservas', details: error});
    }
});

export default router;