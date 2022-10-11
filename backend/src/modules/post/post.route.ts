import express from 'express';
import validateResource from '../../middlewares/validateResource';
import { createPost, deletePost, updatePost } from './post.schema';
import { addPost, editPost, getAllPosts, removePost } from './post.controller';

const router = express.Router();

router.get('/api/posts', getAllPosts);
router.get('/api/posts?page', getAllPosts);
router.post('/api/posts', validateResource(createPost), addPost);
router.patch('/api/posts/:id', validateResource(updatePost), editPost);
router.delete('/api/posts/:id', validateResource(deletePost), removePost);

export default router;
