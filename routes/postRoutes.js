import { Router } from 'express';
import postController from '../controllers/postController.js';

const postRouter = new Router();
postRouter.post('/post', postController.createPost);
postRouter.get('/post', postController.getPostsByUser);
postRouter.put('/post', postController.updatePost);
postRouter.delete('/post/:id', postController.deletePost);

export default postRouter;
