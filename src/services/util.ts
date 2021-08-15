import { Response } from "express";

export const badRequest = (res: Response, err: string) => {
  res.status(400).json({
    err,
  });
};
