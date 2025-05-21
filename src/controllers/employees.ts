import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const getEmployeesData = (): any[] => {
    const dataPath = path.join(__dirname, '../datas/Employee.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
};

router.get('/', (req, res) => {
    const employees = getEmployeesData();
    res.json(employees);
});

export default router;