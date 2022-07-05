import React, { Component } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Switch, Skeleton, Card, Col, Row } from 'antd';
const { Meta } = Card;

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    valor: 0,
    loading: false,
  };

  onChange(checked) {
    this.setState({ loading: !checked });
  }

  render() {
    return (
      <div className="site-card-wrapper">
        <Switch
          checked={!this.state.loading}
          onChange={this.onChange}
          style={{ marginBottom: '1rem' }}
        />
        <Row gutter={16}>
          <Col span={8}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              loading={this.state.loading}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={this.props.titulo}
                description="This is the description"
              />
              <a href="./">Link 1</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              loading={this.state.loading}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton loading={this.state.loading} avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
              <a href="./">Link 2</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              loading={this.state.loading}
            >
              <h3>Card Title</h3>
              <p>Description for card</p>
              <a href="./">Link 3</a>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CardComponent;
