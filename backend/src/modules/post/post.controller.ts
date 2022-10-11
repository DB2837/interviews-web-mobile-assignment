import { Request, Response } from 'express';
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  getpostsByPageAndLimit,
  updatePost,
} from './post.service';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const { _page, _limit } = req.query;

    if (!_page || !_limit) {
      const posts = await getPosts();
      return res.status(201).send(posts);
    }

    const posts = await getpostsByPageAndLimit(+_limit, +_page);
    return res.status(201).send(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const { userId, title, body } = req.body;
    const post = await createPost(userId, title, body);

    return res.status(201).send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const editPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId, title, body } = req.body;

    const post = await getPostById(+id);

    if (!post) {
      return res.status(400).send('post dosent exists');
    }

    if (post.userId != userId) {
      return res.status(400).send('invalid user request');
    }

    const updatedPost = await updatePost(+id, title, body);

    return res.status(201).send(updatedPost);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const removePost = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;

    const post = await getPostById(+id);

    if (!post) {
      return res.status(400).send('post dosent exists');
    }

    if (post.userId != +userId) {
      return res.status(400).send('invalid user request');
    }

    const deletedPost = await deletePost(+id);

    return res.status(201).send(deletedPost);
  } catch (error) {
    return res.status(500).send(error);
  }
};
