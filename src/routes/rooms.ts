import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Suite', price: 150 }]);
});

router.get('/:id', (req, res) => {
  const roomId = req.params.id;
  res.json({ id: roomId, name: 'Suite', price: 150 });
});

router.post('/', (req, res) => {
  const newRoom = req.body;
  res.status(201).json(newRoom);
});

router.put('/:id', (req, res) => {
  const roomId = req.params.id;
  const updatedRoom = req.body;
  res.json({ id: roomId, ...updatedRoom });
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});

export default router;