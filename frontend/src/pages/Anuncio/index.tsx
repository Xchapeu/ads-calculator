import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import calculadora from '../../utils/Calculadora';

import './styles.css';

interface AnuncioProps {
  nome: string;
  cliente: string;
  investimento: number;
  data_inicio: string;
  data_termino: string;
}

interface AnuncioParams {
  id: string;
}

export default function Anuncio() {

  const params = useParams<AnuncioParams>();
  const [anuncio, setAnuncio] = useState<AnuncioProps>();

  useEffect(() => {
    api.get(`/anuncios/${params.id}`).then(response => {
      setAnuncio(response.data);
    })
  }, [params.id]);

  if(!anuncio) {
    return <p>Carregando...</p>
  }

  return(
    <div id="page-anuncio">
      
      <Sidebar />
      
      <main>
        <div className="anuncio-details">
          <div className="anuncio-details-content">
            <h1>Anúncio: {anuncio.nome}</h1>
            <p>Cliente: {anuncio.cliente}</p>
            <p>Investimento diário: R${anuncio.investimento}</p>
            <p>Início: {anuncio.data_inicio}</p>
            <p>Termino: {anuncio.data_termino}</p>
          </div>
          <div className="anuncio-details-content">
            {calculadora(anuncio.investimento, anuncio.data_inicio, anuncio.data_termino)}
          </div>
        </div>
      </main>
      
    </div>
  );
}