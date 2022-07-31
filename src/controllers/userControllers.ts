import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';
import { createJwtToken } from '../utils/createJwtToken';
import { comparePassword, encryptPassword } from '../utils/encryptPassword';

export class UserControllers {
  public userRepository;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await this.userRepository.findOneBy({ username });

    if (user !== null) {
      const passwordCorrect = comparePassword(password, user.password);
      if (passwordCorrect) {
        delete user.password;
        res.send({ status: 200, statusMessage: 'success', data: user });
      } else {
        res.send({ status: 401, statusMessage: 'error', data: { error: 'Invalid Username or password' } });
      }
    } else {
      res.send({ status: 404, statusMessage: 'error', data: { error: 'User not found' } });
    }
  };

  public signup = async (req: Request, res: Response) => {
    const user = new User();
    const { username, password } = req.body;

    user.username = username;
    user.password = encryptPassword(password);
    user.token = createJwtToken({ username, password });

    const savedUser = await this.userRepository.save(user);
    delete savedUser.password;

    res.send({ status: 200, statusMessage: 'success', data: savedUser });
  };

  public profile = async (req: Request, res: Response) => {
    res.send('profile');
  };

  public forgotPassword = async (req: Request, res: Response) => {
    res.send('Forgot Password');
  };
}
