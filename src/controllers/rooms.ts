import { Router } from 'express';
import Room from '../database/models/room';


const router = Router();

router.get('/', async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
});

router.post('/', (req, res) => {
    
});

export default router;