import { Router } from 'express';
import Guest from '../database/models/guest';

const router = Router();

router.get('/', async (req, res) => {
    const guests = await Guest.find();
    res.json(guests);
});

export default router;