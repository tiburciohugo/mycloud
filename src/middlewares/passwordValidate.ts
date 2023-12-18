import { Request, Response, NextFunction } from 'express';

/**
 * Middleware function for validating password in the request body.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 *
 * @returns {void} - The function does not return a value. It either sends a response with an error status and message or calls the next middleware function.
 */
export const passwordValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body as { password: string };

  if (!password) {
    res
      .status(400)
      .json({ status: false, data: { message: 'Missing password' } });
  }

  const strongPasswordRegex: RegExp =
    /^(?=.*[A-Z])(?=.*[!@#$%^&;:{}|<>*\\('")\-_+.])(?=.*[0-9]).{8,}$/;
  const isPasswordStrong: boolean = strongPasswordRegex.test(password);

  if (!isPasswordStrong) {
    const message: string = `Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.`;
    res.status(400).json({ status: false, data: { message: message } });
    return;
  }

  next();
};
