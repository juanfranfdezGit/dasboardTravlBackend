import { Router } from 'express';
import Booking from '../database/models/booking';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('room');
        res.json(bookings);
        console.log(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las reservas', details: error});
    }
});

export default router;