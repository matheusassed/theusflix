import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(

  // O BrowserRouter toma o controle do roteamento do navegador, ou seja, quando houver uma rota específica tratada pelo BrowserRouter, não recarrega a página, exiba o elemento X
  // exemplo https://my-app/ - Exibe o componente principal
  // https://my-app/cadastro - Exibe o componente tratado para a rota /cadastro
  <BrowserRouter>
    
    {/* O Switch se comporta como um if else, exibe o componente especificado no Route compatível com a rota do browser */}
    <Switch>

      {/* Cada Route especifica uma rota do navegador, e o componente que será exibido nela */}
      {/* Veja o exemplo abaixo */}
      <Route path="/cadastro/video" component={ CadastroVideo } exact/>
      <Route path="/cadastro/categoria" component={ CadastroCategoria } exact/>
      <Route path="/" component={ Home } exact/>
      <Route component={ Pagina404 }/>
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
