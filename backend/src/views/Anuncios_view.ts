import Anuncio from '../models/Anuncio';

export default {
  render(anuncio: Anuncio) {
    return {
      id: anuncio.id,
      nome: anuncio.nome,
      cliente: anuncio.cliente,
      created_at: anuncio.created_at,
      updated_at: anuncio.updated_at,
      investimento: anuncio.investimento,
      data_inicio: anuncio.data_inicio,
      data_termino: anuncio.data_termino
    }
  },

  renderMany(anuncios: Anuncio[]) {
    return anuncios.map(anuncio => this.render(anuncio));
  }
}