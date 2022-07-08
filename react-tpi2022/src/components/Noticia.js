// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import env_ from '../env';

function Noticia() {
  //   let query = 'bitcoin',
  //     page = 1,
  //     items = 10,
  //     lang = 'es';

  // const url =
  //   'https://newsapi.org/v2/everything?q=' +
  //   query +
  //   '&apiKey=' +
  //   env_().API_KEY +
  //   '&page=' +
  //   page +
  //   '&pageSize=' +
  //   items +
  //   '&language=' +
  //   lang;

  // const [loading, setLoading] = useState(false),
  //   [datos, setDatos] = useState(null),
  //   [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     setDatos(res.data.articles);
  //     console.log(res.data.articles);
  //   });
  // }, [url]);

  return (
    <>
      <h1>Componente Noticia</h1>
      {/* <h2>{titulo || 'Curso React 2022'}</h2>
      <p>{descripcion || 'Informatorio FrontEnd Development'}</p>
      <div className="flex-counter">
        {handleClickMinus && <button onClick={handleClickMinus}> - </button>}
        <p>{contador}</p>
        {handleClickPlus && <button onClick={handleClickPlus}> + </button>}
      </div> */}
    </>
  );
}

export default Noticia;
