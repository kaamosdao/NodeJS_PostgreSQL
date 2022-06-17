import express from 'express';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';

const PORT = process.env.PORT || 4200;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
