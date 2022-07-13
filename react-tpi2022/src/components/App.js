import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contacto from '../pages/Contacto';
import Disclaimer from '../pages/Disclaimer';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Privacy from '../pages/Privacy';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="" exact element={<Home />} />
        <Route path="about" exact element={<About />} />
        <Route path="contacto" exact element={<Contacto />} />
        <Route path="disclaimer" exact element={<Disclaimer />} />
        <Route path="privacy" exact element={<Privacy />} />
        <Route path="buscador" exact element={<Home />} />
        <Route path="*" exact element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
