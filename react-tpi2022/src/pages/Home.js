import React, { Component } from 'react';
import { Layout, Input, Divider } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import CreateForm from '../components/CreateForm';
import CardComponent from '../components/CardComponent';
import Lista from '../components/Lista';
const { Content, Footer } = Layout;
const { Search } = Input;

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  state = {
    valor: 0,
    form: {
      titulo: 'Franco',
    },
  };

  handleChange = (e) => {
    this.setState({ form: { titulo: e.target.value } });
  };

  onSearch = (value) => console.log(value);

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
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="default"
              suffix={this.suffix}
              onSearch={this.onSearch}
              style={{
                width: 304,
                marginBottom: '2rem',
              }}
            />
            <CardComponent titulo={this.state.form.titulo} />
            <Divider />
            <CreateForm
              formValues={this.state.form}
              handleChange={this.handleChange}
            />
            <Divider />
            <Lista />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          <a href="./"> Franco Barreto ©2022 </a>|<a href="./"> Privacy </a>|
          <a href="./"> About </a> | <a href="./"> Disclaimer </a>
        </Footer>
      </Layout>
    );
  }
}

export default Home;
