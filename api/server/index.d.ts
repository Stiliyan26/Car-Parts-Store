import { AuthPayload } from "./types/core.interfaces";

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: AuthPayload;
      token?: string;
    }
  }
}