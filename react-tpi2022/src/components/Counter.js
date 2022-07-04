import React, { Component } from 'react';
import Noticia from './Noticia';

class Counter extends Component {
  constructor() {
    super();
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  state = {
    valor: 0,
  };

  decrement() {
    if (this.state.valor > 0) this.setState({ valor: this.state.valor - 1 });
  }

  increment() {
    this.setState({ valor: this.state.valor + 1 });
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <div className="flex-counter">
          <button onClick={this.decrement}> - </button>
          <p>{this.state.valor}</p>
          <button onClick={this.increment}> + </button>
        </div>
        <Noticia
          cont={this.state.valor}
          handleClickMinus={this.decrement}
          handleClickPlus={this.increment}
        />
        <Noticia cont={this.state.valor} />
        <Noticia cont={this.state.valor} />
      </>
    );
  }
}

export default Counter;
