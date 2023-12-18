import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { SigninRequestBody, SignupRequestBody } from '../types/types';
import { UserRepository } from '../utils/user';
import { User } from '../entity/User';

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, username, password } = req.body as SignupRequestBody;

  if (!email || !username || !password) {
    res.status(400).json({ status: false, message: 'Missing required fields' });
    return;
  }

  const existingUser = await UserRepository.findOneBy({ email });

  if (existingUser) {
    res.status(400).json({ status: false, message: 'User already exists' });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = UserRepository.create({
    email,
    username,
    password: hashedPassword
  });

  await UserRepository.save(newUser);

  res
    .status(201)
    .json({ status: true, message: 'User registered successfully' });
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { email, username, password } = req.body as SigninRequestBody;

  if ((!email && !username) || !password) {
    res.status(400).json({ status: false, message: 'Missing required fields' });
    return;
  }

  let user: User | null = null;

  if (email) {
    user = await UserRepository.findOne({ where: { email } });
  } else if (username) {
    user = await UserRepository.findOne({ where: { username } });
  }

  if (!user) {
    res.status(400).json({ status: false, message: 'User not found' });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400).json({ status: false, message: 'Invalid password' });
    return;
  }

  res
    .status(200)
    .json({ status: true, message: 'User signed in successfully' });
};
