import prisma from '../lib/prisma'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return { props: { feed } };
  };