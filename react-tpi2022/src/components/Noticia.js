function Noticia(props) {
  const noticia = {
    titulo: props.titulo,
    descripcion: props.descripcion,
  };

  const { titulo, descripcion } = noticia;

  return (
    <>
      <h2>{titulo || 'Curso React 2022'}</h2>
      <p>{descripcion || 'Informatorio FrontEnd Development'}</p>
    </>
  );
}

export default Noticia;
