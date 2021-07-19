import React from 'react'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        <p>Meu primeiro parágrafo em React.</p>
        <p>Meu segundo parágrafo em React.</p>
        <p>{new Date().toLocaleDateString("pt-BR")}</p>
      </>
    );
  }
}

export default App;
