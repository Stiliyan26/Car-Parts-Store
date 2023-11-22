import { AuthPayload } from "./types/IData";

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: AuthPayload;
      token?: string;
    }
  }
}