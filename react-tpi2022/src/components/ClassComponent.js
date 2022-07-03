import React, { Component } from 'react';
import Noticia from './Noticia';

class ClassComponent extends Component {
  render() {
    const { titulo } = this.props;
    return (
      <>
        <h1>{titulo}</h1>
        <Noticia />
      </>
    );
  }
}

export default ClassComponent;
