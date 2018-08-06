import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import commentController from './controllers/commentController';
import postController from './controllers/postController';

const routes = express();

routes.get('/', basicController.get);

// User Routes
routes.post('/signup', userController.post);

routes.post('/post', postController.post);

routes.get('/posts', postController.getAll);

// Comment Routes
routes.post('/comment', commentController.post);

export default routes;