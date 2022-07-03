function Noticia() {
  const noticia = {
    titulo: 'Titulo de la Noticia',
    descripcion: 'Descripcion de la noticia',
  };

  const { titulo, descripcion } = noticia;

  return (
    <>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </>
  );
}

export default Noticia;
