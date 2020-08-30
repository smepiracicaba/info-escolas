import React, { Component } from 'react';
import './App.css';
import data from './data/info-escolas.json';

class App extends Component {
  state = {
    escolas: []
  }

  componentDidMount() {
    this.loadSchoolsInfo();
  }

  loadSchoolsInfo = () => {
    this.setState({
      escolas: data.escolas
    })
  }

  render() {
    const { escolas } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          
          {escolas.map(escola => (
            <article>
              <strong>{escola.nome}</strong>
              <p>{escola.endereco}</p>
              <p>{escola.bairro}</p>
              <p>{escola.loteamento}</p>
              <p>{escola.regiao}</p>
              <p>{escola.telefone.primario}</p>
              <p>{escola.localizacao.latitude}</p>
              <p>{escola.localizacao.longitude}</p>
      
            </article>
          ))}

        </header>
      </div>
    );
  }
}

export default App;
