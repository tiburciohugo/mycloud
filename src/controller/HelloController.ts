import { Request, Response } from 'express';

export const Hello = async (req: Request, res: Response): Promise<Response> => {
  try {
    res.status(200).json({
      message: 'Hello you reached the default endpoint'
    });
  } catch (error) {
    console.error(error);
  }
  return;
};
