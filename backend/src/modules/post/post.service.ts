import prisma from '../../utils/prismaClient';

export const getPosts = async () => {
  return await prisma.post.findMany();
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
};

export const getpostsByPageAndLimit = async (limit: number, page: number) => {
  const postsToSkip = limit * page - limit;

  return await prisma.post.findMany({
    take: limit,
    skip: postsToSkip,
  });
};

export const getUserPosts = async (userID: number) => {
  return await prisma.post.findMany({
    where: {
      userId: userID,
    },
    orderBy: {
      id: 'asc',
    },
  });
};

export const createPost = async (
  userID: number,
  title: string,
  body: string
) => {
  return await prisma.post.create({
    data: {
      userId: userID,
      title: title,
      body: body,
    },
  });
};

export const updatePost = async (id: number, title: string, body: string) => {
  return await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      body: body,
    },
  });
};

export const deletePost = async (id: number) => {
  return await prisma.post.delete({
    where: {
      id: id,
    },
  });
};
