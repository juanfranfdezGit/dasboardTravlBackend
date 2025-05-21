import express from 'express';
import { login } from '../middleware/auth';

const router = express.Router();

router.post('/', (req, res): void => {
    const {username, password} = req.body;

    if (!username || !password) {
        res.status(400).json({error: 'Introduce datos de usuario'})
        return
    }

    const token = login(username, password);

    if (token) {
        res.status(200).json({message: 'Login Exitoso'})
        return
    } else {
        res.status(401).json({message: 'Login Incorrecto'})
        return
    }
})

export default router;