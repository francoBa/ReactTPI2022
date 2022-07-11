import NewForm from '../components/forms/NewForm';
import { Layout } from 'antd';
const { Content } = Layout;

function Contacto() {
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
