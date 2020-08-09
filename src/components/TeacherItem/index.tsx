import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://i.pinimg.com/236x/61/69/67/61696742e1b2d8b0d3ed70efaa1b0f89.jpg" 
          alt="Guilherme Henrique"
        />
        <div>
          <strong>Guilherme Henrique</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br/><br/>
        Apaixonado por calcular coisas na calculadora e por mudar a vida das pessoas através de cálculos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}
