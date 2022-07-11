import React, { Component } from 'react';
import { Layout } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ListaNoticias from '../components/ListaNoticias';
import Search from '../components/Search';
const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  state = {
    valor: 'bitcoin',
    buscarBtn: true,
    form: {
      titulo: 'Franco',
    },
  };

  handleChange = (e) => {
    this.setState({ form: { titulo: e.target.value } });
  };

  onSearch = (value) => {
    this.setState({ valor: value });
  };

  suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  render() {
    return (
      <Layout>
        <Content
          style={{
            padding: '0 50px',
            className: 'site-layout-content',
          }}
        >
          <div className="site-layout-content">
            <Search changeValue={this.onSearch} />
            <ListaNoticias valor={this.state.valor} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Home;
