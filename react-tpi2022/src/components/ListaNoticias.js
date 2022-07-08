import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin } from 'antd';
import axios from 'axios';
import env_ from '../env';
const { Meta } = Card;

function ListaNoticias(props) {
  let query = props.valor,
    page = 1,
    items = 10,
    lang = 'es';

  const url =
    'https://newsapi.org/v2/everything?q=' +
    query +
    '&apiKey=' +
    env_().API_KEY +
    '&page=' +
    page +
    '&pageSize=' +
    items +
    '&language=' +
    lang;

  const [loading, setLoading] = useState(false),
    [datos, setDatos] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // setDatos(null);
    axios.get(url).then((res) => {
      setDatos(res.data.articles);
      console.log(res.data.articles);
    });
  }, [url]);

  function mostrarContenido(e) {
    setTimeout(() => setLoading(false), 500);
  }

  return (
    <>
      <Row gutter={16}>
        {datos &&
          datos.map((item, index) => {
            return (
              <Col xs={24} md={12} lg={8} key={index}>
                <Spin tip="Loading..." spinning={loading}>
                  <Card
                    cover={
                      <img
                        alt="example"
                        src={item.urlToImage}
                        onLoad={mostrarContenido}
                      />
                    }
                  >
                    <Meta title={item.title} description={item.content} />
                    <a href="./">Link {index + 1}</a>
                  </Card>
                </Spin>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default ListaNoticias;
