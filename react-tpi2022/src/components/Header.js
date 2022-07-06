import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header: Head } = Layout;

function Header(props) {
  const items = [
    { label: <NavLink to="/">Home</NavLink>, key: 'item-1' },
    { label: <NavLink to="/about">About</NavLink>, key: 'item-2' },
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ];

  const titulo = 'React Info 2022';
  const [current, setCurrent] = useState('item-1');

  const onClickItem = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };

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
