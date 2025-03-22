import { GraphQLError } from 'graphql';
import { RegisterUserInput } from '../types';

export const validatePassword = (password: string): void => {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    throw new GraphQLError(
      'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, and one number.',
    );
  }
};

export const validateEmail = (email: string): void => {
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
    throw new GraphQLError('Invalid email address');
  }
};

export const validateName = (name: string): void => {
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    throw new GraphQLError('Name must contain only letters and spaces');
  }
};

export const validateRole = (role: string): void => {
  if (!/^(ADMIN|CUSTOMER)$/.test(role)) {
    throw new GraphQLError('Role must be either admin or user');
  }
};

export const validateRegisterUserInput = (input: RegisterUserInput): void => {
  validateEmail(input.email);
  validateName(input.firstName);
  validateName(input.lastName);
  validatePassword(input.password);
  validateRole(input.role);
};
