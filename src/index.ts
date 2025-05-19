import express from 'express';
import roomsRouter from './routes/rooms';
import bookingsRouter from './routes/bookings';
import employeesRouter from './routes/employees';
import guestsRouter from './routes/guests';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/guests', guestsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});