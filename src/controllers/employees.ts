import { Router } from 'express';
import Employee from '../database/models/employee';

const router = Router();

router.get('/', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

export default router;