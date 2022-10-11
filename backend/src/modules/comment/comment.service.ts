import prisma from '../../utils/prismaClient';

export const getPostComments = async (postId: number) => {
  return await prisma.comment.findMany({
    where: {
      postId: postId,
    },
  });
};
