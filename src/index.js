import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';/*index css referanciado conectado */
import Calculator from './main/Calculator';/*tira componente app e coloca main calculator */
//import serviceWorker from './serviceWorker'; //não necessario importar o service worker padrão do react criado

ReactDOM.render(/*tira app e coloca calculator aqui tbm render,,,h1 só funciona pq esta envolvida em uma div */
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker();
