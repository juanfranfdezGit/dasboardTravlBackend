import express from 'express';
import roomsRouter from './routes/rooms';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/rooms', roomsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});