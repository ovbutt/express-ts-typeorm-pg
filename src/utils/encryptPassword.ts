import bcrypt from 'bcryptjs';

export const encryptPassword = (password: string) => {
  return bcrypt.hashSync(password, 10).toString();
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};
