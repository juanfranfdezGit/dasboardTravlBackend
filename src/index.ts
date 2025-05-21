import express from 'express';
import roomsRouter from './controllers/rooms';
import bookingsRouter from './controllers/bookings';
import employeesRouter from './controllers/employees';
import guestsRouter from './controllers/guests';
import loginRouter from './controllers/login';

import { authenticateJWT } from './middleware/authenticateJWT';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/login', loginRouter);

app.use(authenticateJWT);

app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/guests', guestsRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});