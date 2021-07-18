import React from 'react';

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: '' }
  }
  render() {
    return (
      <>
        nome: <input type='text' value={this.state.nome} />
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;