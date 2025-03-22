import { QueryResolvers, Role } from '../types';

const Query: QueryResolvers = {
  // add your query resolvers here
  user: async (parent, args, context) => {
    const user = await context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return {
      id: user.id,
      email: user.email,
      role: user.role as unknown as Role,
      firstName: user.firstName,
      lastName: user.lastName,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  },
};

export default Query;
