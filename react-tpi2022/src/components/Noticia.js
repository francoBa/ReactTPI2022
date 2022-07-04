function Noticia(props) {
  // const noticia = {
  //   titulo: props.titulo,
  //   descripcion: props.descripcion,
  //   contador: props.cont,
  // };

  const {
    titulo,
    descripcion,
    cont: contador,
    handleClickMinus,
    handleClickPlus,
  } = props;

  return (
    <>
      <h2>{titulo || 'Curso React 2022'}</h2>
      <p>{descripcion || 'Informatorio FrontEnd Development'}</p>
      <div className="flex-counter">
        {handleClickMinus && <button onClick={handleClickMinus}> - </button>}
        <p>{contador}</p>
        {handleClickPlus && <button onClick={handleClickPlus}> + </button>}
      </div>
    </>
  );
}

export default Noticia;
