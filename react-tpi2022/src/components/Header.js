import { useEffect, useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header: Head } = Layout;

function Header(props) {
  const items = [
    { label: <NavLink to="/">Home</NavLink>, key: 'Home' },
    { label: <NavLink to="/about">About</NavLink>, key: 'About' },
    {
      label: 'Contact Us',
      key: 'Contact-Us',
      children: [{ label: 'Send Email', key: 'Form' }],
    },
  ];

  const [titulo, setTitulo] = useState('React Info 2022');
  const [current, setCurrent] = useState('Home');

  const onClickItem = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };

  useEffect(() => {
    // console.log('Se ejecuta el hook useEffect si cambia el título desde props');
    setTitulo('Título desde useEffect');
  }, [props.titulo]);

  useEffect(() => {
    // console.log('Se ejecuta el hook useEffect si cambia el item del menú');
    setTitulo(current);
  }, [current]);

  return (
    <Head
      style={{
        position: 'fixed',
        zIndex: 2,
        width: '100%',
        marginBottom: 64,
      }}
    >
      <Row>
        <Col xs={16} md={12} lg={12}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            selectedKeys={[current]}
            onClick={onClickItem}
          />
        </Col>
        <Col>
          <h1 className="main-title">{titulo}</h1>
        </Col>
      </Row>
    </Head>
  );
}

export default Header;
