import React, { Component } from 'react';

class Lista extends Component {
  state = {
    titulo: 'Título de la noticia',
  };

  render() {
    const { titulo } = this.props;
    return (
      <>
        <h1>{titulo}</h1>
      </>
    );
  }
}

export default Lista;
