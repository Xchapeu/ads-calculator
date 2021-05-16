import React, { FormEvent, useState } from 'react';

import PrimaryButton from '../../components/PrimaryButton';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import calculadora from '../../utils/Calculadora';

import './styles.css';

export default function CreateAnuncio() {

  const history = useHistory();

  const [nome, setNome] = useState("");
  const [cliente, setCliente] = useState("");
  const [investimento, setInvestimento] = useState(0);
  const [dataInicio, setDataInicio] = useState("");
  const [dataTermino, setDataTermino] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();
    data.append('nome', nome);
    data.append('cliente', cliente);
    data.append('investimento', String(investimento));
    data.append('data_inicio', dataInicio);
    data.append('data_termino', dataTermino);

    calculadora(investimento, dataInicio, dataTermino);

    console.log(data);

    await api.post('anuncios', data);

    alert("Cadastro efetuado com sucesso!!");

    history.push('/anuncios/create');

  }

  return(
    <div id="page-create-anuncio">
      
      <Sidebar />
      
      <main>
        <form onSubmit={handleSubmit} className="create-anuncio-form">
          <fieldset>
            
            <legend>Dados do anúncio</legend>
            
            <div className="input-block">
              <label htmlFor="nome">Anúncio</label>
              <input 
                id="nome"
                value={nome}
                onChange={event => setNome(event.target.value)} 
              />
            </div>

            <div className="input-block">
              <label htmlFor="cliente">Cliente</label>
              <input 
                id="cliente"
                value={cliente}
                onChange={event => setCliente(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="investimento">Investimento diário</label>
              <input 
                id="investimento"
                value={investimento}
                onChange={event => setInvestimento(Number(event.target.value))}
              />
            </div>

            <div className="input-block">
              <label htmlFor="dataInicio">data de início</label>
              <input 
                id="dataInicio"
                type="date"
                value={dataInicio}
                onChange={event => setDataInicio(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="dataTermino">data de termino</label>
              <input 
                id="dataTermino"
                type="date"
                value={dataTermino}
                onChange={event => setDataTermino(event.target.value)}
              />
            </div>

            <PrimaryButton type="submit">Cadastrar</PrimaryButton>

          </fieldset>
        </form>
      </main>
    </div>
  );
}