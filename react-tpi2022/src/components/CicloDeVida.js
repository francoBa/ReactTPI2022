import React, { Component } from 'react';

class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: null,
      date: new Date(),
    };
    this.tick = this.tick.bind(this);
    console.log('Ciclo de vida nivel 1 - Constructor');
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    console.log(
      'Ciclo de vida nivel 3 - componentDidMount, aquí llamamos a las APIs'
    );
    this.setState({ api: ['elemento uno'] });
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log('Ciclo de vida nivel 4 - Con el render del state');
  }

  componentWillUnmount() {
    console.log(
      'Ciclo de vida nivel 5 - Se usa para terminar un timeout por ejemplo'
    );
    clearInterval(this.timeID);
  }

  render() {
    console.log('Ciclo de vida nivel 2 - Render');
    return (
      <>
        <h1>Ciclos de vida de los componentes</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <p>ciclo de vida</p>
      </>
    );
  }
}

export default CicloDeVida;
