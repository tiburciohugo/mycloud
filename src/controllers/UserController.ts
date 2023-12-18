import { Request, Response } from 'express';
import { UserRepository } from '../utils/user';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserRepository.find();
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
};
