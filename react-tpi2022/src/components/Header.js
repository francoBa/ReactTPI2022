import { Layout, Menu } from 'antd';
const { Header: Head } = Layout;

function Header() {
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ];

  return (
    <Head
      style={{
        position: 'fixed',
        zIndex: 2,
        width: '100%',
      }}
    >
      <Menu theme="dark" mode="horizontal" items={items} />
      <h1 className="float-right-title">React & Ant Design</h1>
    </Head>
  );
}

export default Header;
