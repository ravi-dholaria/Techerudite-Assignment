import config from '../../config';
import { MutationResolvers, User } from '../types';
import sendMail from './utils';
import { validateRegisterUserInput } from './validations';
import { compare, hash } from 'bcrypt';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

const Mutation: MutationResolvers = {
  // add your mutation resolvers here
  registerUser: async (parent, args, context) => {
    try {
      // Validate the input
      validateRegisterUserInput(args.input);

      // Check if the user already exists
      const existingUser = await context.prisma.user.findUnique({
        where: {
          email: args.input.email,
        },
      });

      if (existingUser) {
        throw new Error('User already exists');
      }

      // Hash password and create token
      const hashedPassword = await hash(args.input.password, 10);
      const token = sign({ email: args.input.email }, config.jwtSecret, { expiresIn: '1h' });

      // Create the user
      const user = await context.prisma.user.create({
        data: {
          firstName: args.input.firstName,
          lastName: args.input.lastName,
          email: args.input.email,
          password: hashedPassword,
          role: args.input.role,
          emailVerified: false,
          verificationToken: token,
        },
      });

      // Send verification email
      const url = `http://localhost:5173/verify-email?token=${token}`;
      try {
        await sendMail(user.email, url);
      } catch (error) {
        console.error('Error sending verification email:', error);
        // Continue execution since user was created successfully
      }

      return { message: 'User created successfully' };
    } catch (error) {
      console.error('Error in registerUser:', error);
      throw error instanceof Error ? error : new Error('Failed to register user');
    }
  },

  verifyEmail: async (parent, args, context) => {
    const tokenPayLoad = verify(args.input.token, config.jwtSecret);
    if (!tokenPayLoad) {
      throw new Error('Invalid token');
    }
    const email = (tokenPayLoad as JwtPayload & { email: string }).email;
    const user = await context.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new Error('User not found');
    if (user.emailVerified) throw new Error('Email already verified');
    if (user.verificationToken !== args.input.token) throw new Error('Invalid token');

    await context.prisma.user.update({
      where: {
        email,
      },
      data: {
        emailVerified: true,
        verificationToken: null,
      },
    });
    return { message: 'Email verified successfully' };
  },

  adminLogin: async (parent, args, context) => {
    const user = await context.prisma.user.findFirst({
      where: {
        email: args.input.email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.emailVerified === false) {
      throw new Error('Email not verified');
    }

    if (user.role !== 'ADMIN') {
      throw new Error('User is not an admin');
    }

    const passwordMatch = await compare(args.input.password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    const token = sign({ email: user.email, role: user.role }, config.jwtSecret, {
      expiresIn: '1h',
    });

    return { token, message: 'Admin logged in successfully' };
  },
};

export default Mutation;
