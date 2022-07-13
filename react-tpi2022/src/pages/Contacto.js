import NewForm from '../components/forms/NewForm';
import { Layout } from 'antd';
const { Content } = Layout;

function Contacto() {
  // console.log(window.location);
  return (
    <Layout>
      <Content
        style={{
          className: 'site-layout-content',
        }}
      >
        <div className="site-layout-content">
          <NewForm />
        </div>
      </Content>
    </Layout>
  );
}

export default Contacto;
