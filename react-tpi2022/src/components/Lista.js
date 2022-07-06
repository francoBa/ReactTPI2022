import React, { Component } from 'react';
import { Avatar, Card, Row, Col } from 'antd';
const { Meta } = Card;

class Lista extends Component {
  state = {
    titulo: 'Título de la noticia',
  };

  render() {
    // const { titulo } = this.props;
    const elementos = ['Primer card', 'Segundo Card', 'Tercer Card'];
    return (
      <>
        <Row gutter={16}>
          {elementos.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item}
                    description="This is the description"
                  />
                  <a href="./">Link {index + 1}</a>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Lista;
