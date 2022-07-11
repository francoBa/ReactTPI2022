import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
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
        Franco Barreto ©{year}{' '}
      </a>
      |{' '}
      <NavLink to={{ pathname: '/privacy', titulo: 'Privacy' }}>
        Privacy
      </NavLink>{' '}
      | <NavLink to="/disclaimer">Disclaimer</NavLink>
    </Foot>
  );
}

export default Footer;
