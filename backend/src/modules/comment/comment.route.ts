import express from 'express';
import { getComments } from './comment.controller';

const router = express.Router();

router.get('/api/posts/:postId/comments', getComments);

export default router;
