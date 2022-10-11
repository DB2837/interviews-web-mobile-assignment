import { Request, Response } from 'express';
import { getPostComments } from './comment.service';

export const getComments = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const comments = await getPostComments(+postId);

    return res.status(201).send(comments);
  } catch (error) {
    return res.status(500).send(error);
  }
};
