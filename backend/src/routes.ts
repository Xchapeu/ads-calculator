import { Router } from 'express';
import AnuncioController from './controllers/AnuncioController';

const routes = Router();

routes.get('/anuncios', AnuncioController.index);
routes.get('/anuncios/:id', AnuncioController.show);
routes.post('/anuncios', AnuncioController.create);

export default routes;