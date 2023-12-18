import { Request, Response, NextFunction } from 'express';

/**
 * Middleware function for validating email in the request body.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 *
 * @returns {void} - The function does not return a value. It either sends a response with an error status and message or calls the next middleware function.
 */
export const emailValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body as { email: string };

  if (!email) {
    res.status(400).json({ status: false, data: { message: 'Missing email' } });
    return;
  }

  const emailRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    res.status(400).json({ status: false, data: { message: 'Invalid email' } });
    return;
  }

  next();
};
