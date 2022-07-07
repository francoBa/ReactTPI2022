import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
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
  // const mensaje = 'Bienvenido al buscador español';

  const onClickItem = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };

  useEffect(() => {
    console.log('Se ejecuta el hook useEffect si cambia el título desde props');
    setTitulo('Título desde useEffect');
  }, [props.titulo]);

  useEffect(() => {
    console.log('Se ejecuta el hook useEffect si cambia el item del menú');
    setTitulo(current);
  }, [current]);

  // useEffect(() => {
  //   console.log('Se ejecuta el hook useEffect sólo una vez, en la carga');
  //   alert(mensaje);
  // }, []);

  return (
    <Head
      style={{
        position: 'fixed',
        zIndex: 2,
        width: '100%',
        marginBottom: 64,
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        selectedKeys={[current]}
        onClick={onClickItem}
      />
      <h1 className="float-right-title">{titulo}</h1>
    </Head>
  );
}

export default Header;
