import express, { Application } from 'express';
import dotenv from 'dotenv';
import prisma from '../src/utils/prismaClient';
import cors from 'cors';
import postRouter from './modules/post/post.route';
import commentRouter from './modules/comment/comment.route';

dotenv.config();
const PORT = Number(process.env.PORT) || 3001;
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  })
);

app.use(postRouter);
app.use(commentRouter);

const main = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
