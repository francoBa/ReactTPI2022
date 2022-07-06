import { Layout, Input, Divider } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import CreateForm from '../components/CreateForm';
import CardComponent from '../components/CardComponent';
import { useState } from 'react';
const { Content, Footer } = Layout;
const { Search } = Input;

function About() {
  const onSearch = (value) => console.log(value);

  const handleChange = (e) => {
    setForm({ titulo: e.target.value });
  };

  const [form, setForm] = useState({ titulo: 'Franco' });

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

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
            suffix={suffix}
            onSearch={onSearch}
            style={{
              width: 304,
              marginBottom: '2rem',
            }}
          />
          <CardComponent titulo={form.titulo} />
          <Divider />
          <CreateForm formValues={form} handleChange={handleChange} />
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

export default About;
