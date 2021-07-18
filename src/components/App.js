import React from 'react'
import './App.css';
import App2 from './App2';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <p>Meu primeiro parágrafo em React.</p>
        <p>Meu segundo parágrafo em React.</p>
        <App2 title="Isso é um teste">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia, quam sed officiis libero repellat voluptate dolores amet molestiae nostrum aperiam inventore veritatis aut quaerat, tenetur laudantium natus? Saepe, minus!
        </App2>
        <p>{new Date().toLocaleDateString("pt-BR")}</p>
      </>
    );
  }
}

export default App;
