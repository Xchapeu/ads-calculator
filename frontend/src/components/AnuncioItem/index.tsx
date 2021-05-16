import React from 'react';

import '../../pages/Anuncio/styles.css';

export interface Anuncio {
  id: number;
  nome: string;
  cliente: string;
  investimento: number;
  dataInicio: string;
  dataTermino: string;
}

interface AnuncioItemProps {
  anuncio: Anuncio;
}

const AnuncioItem: React.FC<AnuncioItemProps> = ({ anuncio }) => {
  return(
    <div id="page-anuncio">
      
      <main>
        <div className="anuncio-details">
          <div className="anuncio-details-content">
            <h1>Anuncio: {anuncio.nome}</h1>
            <p>Cliente: {anuncio.cliente}</p>
            <p>Investimento: R${anuncio.investimento}</p>
            <p>Data de início: {anuncio.dataInicio}</p>
            <p>Data de termino: {anuncio.dataTermino}</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default AnuncioItem;