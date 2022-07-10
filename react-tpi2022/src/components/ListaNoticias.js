import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Typography } from 'antd';
import Swal from 'sweetalert2';

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

  function goToLink(url) {
    console.log(url);
    Swal.fire({
      html: `<iframe src=${url} style="min-height: 95vh; width: 100%; border:none;"></iframe>`,
      showCloseButton: true,
      showConfirmButton: false,
      padding: 0,
      width: '80vw',
      heightAuto: true,
    });
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
                    <a onClick={() => goToLink(item.url)}>
                      {/* <a onClick={goToLink} href={item.url} target="_blank" rel="noreferrer"> */}
                      <Card
                        cover={
                          <img
                            alt="example"
                            src={item.urlToImage}
                            onLoad={mostrarContenido}
                          />
                        }
                        hoverable={true}
                      >
                        <Meta
                          title={item.title}
                          description={item.content}
                          style={{ marginBottom: '1rem' }}
                        />
                        <p style={{ marginBottom: 0 }}>
                          Publicado el{' '}
                          {new Date(item.publishedAt).toLocaleDateString(
                            'es-AR'
                          )}{' '}
                          a las{' '}
                          {new Date(item.publishedAt).toLocaleTimeString(
                            'es-AR',
                            { hour: '2-digit', minute: '2-digit' }
                          )}{' '}
                          hs
                        </p>
                      </Card>
                    </a>
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
