import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  console.error('❌ JWT_SECRET environment variable is missing!');
  process.exit(1); // Stop server if JWT_SECRET missing
}

export interface JWTPayload {
  userId: string;
  email: string;
  username: string;
}

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d' // Token 7 days valid rahega
  });
};

export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
};