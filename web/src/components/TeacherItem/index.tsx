import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/19808865?s=460&u=5c8a77ba66a86ca46143944e3bf17fc05014a2d2&v=4"
          alt="Adeilson Silva"
        />
        <div>
          <strong>Adeilson Silva</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Mollit dolor tempor do mollit exercitation velit non occaecat non sint
        adipisicing. Ipsum ut amet et dolor nostrud qui est elit non sint
        consequat nostrud. Duis elit mollit officia dolore.
        <br />
        <br />
        Consequat dolore consequat proident reprehenderit. Ullamco amet commodo
        adipisicing laboris magna. Qui voluptate mollit labore aliquip ex
        eiusmod quis dolore non et eiusmod.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
