import { hashPassword } from './auth';
import { PostgresConnection } from '../config/database';
import { User } from '../entity/User';
import { Repository } from 'typeorm';

export const UserRepository = PostgresConnection.getRepository(
  User
) as Repository<User>;

export const saveNewUser = async (user: User): Promise<User> => {
  const hashedPassword = await hashPassword(user.password);
  const newUser: User = {
    ...user,
    password: hashedPassword
  };

  return await UserRepository.save(newUser);
};
