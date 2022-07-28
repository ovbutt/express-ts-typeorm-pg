// import { Language } from 'typeorm/entities/users/types';
export {};
declare global {
  namespace Express {
    // export interface Request {
    // jwtPayload: JWtpay;
    // language: Language;
    // }
    export interface Response {
      customSuccess(httpStatusCode: number, message: string, data?: any): Response;
    }
  }
}
