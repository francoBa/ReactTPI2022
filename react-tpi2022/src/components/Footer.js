import { NavLink } from 'react-router-dom';
import { Layout, Divider } from 'antd';
const { Footer: Foot } = Layout;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Foot
      style={{
        textAlign: 'center',
      }}
    >
      <a
        href="https://github.com/francoBa/ReactTPI2022"
        target="_blank"
        rel="noreferrer"
      >
        Franco Barreto ©{year}
      </a>
      <Divider type="vertical" />
      <NavLink to={{ pathname: '/privacy', titulo: 'Privacy' }}>
        Privacy
      </NavLink>
      <Divider type="vertical" />
      <NavLink to="/disclaimer">Disclaimer</NavLink>
    </Foot>
  );
}

export default Footer;
