import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Anuncio from '../models/Anuncio';
import anuncioView from '../views/Anuncios_view';
import * as Yup from 'yup';

export default {

  async index(request: Request, response: Response) {
    
    const anuncioRepository = getRepository<Anuncio>(Anuncio);
    const anuncios = await anuncioRepository.find();

    return response.json(anuncioView.renderMany(anuncios));
  },

  async show(request: Request, response: Response) {
    
    const { id } = request.params;
    const anuncioRepository = getRepository<Anuncio>(Anuncio);
    const anuncio = await anuncioRepository.findOneOrFail(id);

    return response.json(anuncioView.render(anuncio));

  },

  async create(request: Request, response: Response) {

    const {
      nome,
      cliente,
      investimento,
      data_inicio,
      data_termino
    } = request.body;

    const anuncioRepository = getRepository<Anuncio>(Anuncio);

    const data = {
      nome,
      cliente,
      investimento,
      data_inicio,
      data_termino
    }

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cliente: Yup.string().required(),
      investimento: Yup.number().required(),
      data_inicio: Yup.string().required(),
      data_termino: Yup.string().required()
    });

    await schema.validate(data, {
      abortEarly: false
    });

    const anuncio = anuncioRepository.create(data);

    await anuncioRepository.save(anuncio);
    return response.status(201).json(anuncio);
  }
}