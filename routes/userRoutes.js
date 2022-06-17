import { Router } from 'express';
import userController from '../controllers/userController.js';

const userRouter = new Router();
userRouter.post('/user', userController.createUser);
userRouter.get('/users', userController.getUsers);
userRouter.get('/user/:id', userController.getOneUser);
userRouter.put('/user', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

export default userRouter;
