import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Landing() {
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Cadastre o seu anúncio</h1>
        </main>
        <Link to="/anuncios/create" className="enter-app">
          <FaArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>
    </div>
  );
}
