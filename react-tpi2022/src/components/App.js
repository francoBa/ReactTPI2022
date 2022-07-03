import '../App.css';
import ClassComponent from './ClassComponent';
import Header from './Header';
import Noticia from './Noticia';

function App() {
  return (
    <div className="App">
      <Header />
      <Noticia
        titulo="Primer noticia"
        descripcion="Detalle de la noticia nro 1"
      />
      <Noticia
        titulo="Segunda noticia"
        descripcion="Detalle de la noticia nro 2"
      />
      <ClassComponent titulo="Este es el class component" />
    </div>
  );
}

export default App;
