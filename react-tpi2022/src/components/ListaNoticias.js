import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Typography, Pagination } from 'antd';
import Swal from 'sweetalert2';

import axios from 'axios';
import env_ from '../env';
const { Meta } = Card;
const { Text } = Typography;

function ListaNoticias(props) {
  let query = props.valor,
    lang = 'es';

  const [loading, setLoading] = useState(false),
    [datos, setDatos] = useState(null),
    [totalNoticas, setTotalNoticias] = useState(0),
    [page, setPage] = useState(1),
    [items, setItems] = useState(10),
    [error, setError] = useState(null),
    [message, showMessage] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    // setDatos(null);
    axios
      .get(url)
      .then((res) => {
        setDatos(res.data.articles);
        setTotalNoticias(res.data.totalResults);
        // console.log(res.data);
        showMessage(true);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  function mostrarContenido(e) {
    setTimeout(() => setLoading(false), 1000);
  }

  const onChange = (pageNumber, pageSize) => {
    console.log('Page: ', pageNumber, 'PageSize: ', pageSize);
    setPage(pageNumber);
    setItems(pageSize);
  };

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
      {datos && datos.length > 0 && (
        <h4 style={{ margin: '1.5rem 0' }}>
          Está viendo {items} noticias de {totalNoticas} resultados
        </h4>
      )}
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
      {datos && datos.length > 0 && (
        <Row gutter={16} justify="center" style={{ marginTop: '1.5rem' }}>
          <Pagination
            current={page}
            showQuickJumper
            defaultPageSize={10}
            defaultCurrent={1}
            total={totalNoticas}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} de ${total} noticias`
            }
            onChange={onChange}
          />
        </Row>
      )}
    </>
  );
}

export default ListaNoticias;
