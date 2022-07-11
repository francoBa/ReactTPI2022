import { Layout } from 'antd';
const { Content } = Layout;

function About() {
  return (
    <Layout>
      <Content
        style={{
          padding: '0 50px',
          className: 'site-layout-content',
        }}
      >
        <div className="site-layout-content">
          <h2 style={{ marginTop: '3rem' }}>Curso de FrontEnd ReactJs 2022</h2>
          <a
            href="https://capacitaciones.chaco.gob.ar/course/view.php?id=147"
            target="_blank"
            rel="noreferrer"
          >
            ReactJs - Chaco: Gobierno de Todos
          </a>
        </div>
      </Content>
    </Layout>
  );
}

export default About;
