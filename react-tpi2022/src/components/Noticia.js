import '../App.css';

function Noticia() {
  const noticia = {
    titulo: 'Titulo de la Noticia',
    descripcion: 'Descripcion de la noticia',
  };

  const { titulo, descripcion } = noticia;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Noticia;
