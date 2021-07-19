import React from 'react';
import App7Item from './App7Item'

class Lista extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, nome: 'item1', completo: false },
        { id: 2, nome: 'item2', completo: false },
        { id: 3, nome: 'item3', completo: true },
        { id: 4, nome: 'item4', completo: false },
      ]
    }
  }

  render() {
    return (
      <ul>
        {React.Children.map(child => child.type == App7Item ? child : null)}
        {this.state.items.map(item => (
          <App7Item key={item.id} id={item.id} completo={item.completo}>
            {item.nome}
          </App7Item>
        ))}
      </ul>
    )
  }
}

export default Lista;