import React, { Component } from 'react';
import { Avatar, Card, Row, Col, Spin } from 'antd';
const { Meta } = Card;

class Lista extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
  }

  state = {
    titulo: 'Título de la noticia',
    loading: true,
  };

  setLoading() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    // const { titulo } = this.props;
    const elementos = ['Primer card', 'Segundo Card', 'Tercer Card'];
    return (
      <>
        <Row gutter={16}>
          {elementos.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <Spin tip="Loading..." spinning={this.state.loading}>
                  <Card
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      }
                      title={item}
                      description="This is the description"
                      onLoad={this.setLoading}
                    />
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
}

export default Lista;
