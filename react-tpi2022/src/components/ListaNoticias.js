import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Typography } from 'antd';
import axios from 'axios';
import env_ from '../env';
const { Meta } = Card;
const { Text } = Typography;

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
    [error, setError] = useState(null),
    [message, showMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setDatos(null);
    axios
      .get(url)
      .then((res) => {
        setDatos(res.data.articles);
        console.log(res.data.articles);
        showMessage(true);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  function mostrarContenido(e) {
    setTimeout(() => setLoading(false), 1000);
  }

  if (error) {
    console.error(error);
    return (
      <Row gutter={16} justify="center">
        <Col justify="center">
          <h1>
            <Text type="danger">
              Se ha generado un error de carga. Contacte a soporte técnico!
            </Text>
          </h1>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row gutter={16} justify="center">
        {datos && datos.length > 0
          ? datos.map((item, index) => {
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
            })
          : message && (
              <Col justify="center">
                <h1>
                  <Text type="warning">
                    No se han encontrado resultados de la búsqueda!
                  </Text>
                </h1>
              </Col>
            )}
      </Row>
    </>
  );
}

export default ListaNoticias;
