import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <p>Meu primeiro parágrafo em React.</p>
        <p>Meu segundo parágrafo em React.</p>
        <div>
          <pre>Cansei de parágrafos...</pre>
        </div>
        <p>{new Date().toLocaleDateString("pt-BR")}</p>
      </>
    );
  }
}

export default App;
