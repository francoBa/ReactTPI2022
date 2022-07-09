import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contacto from '../pages/Contacto';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="about" exact element={<About />} />
        <Route path="buscador" exact element={<Home />} />
        <Route path="contacto" exact element={<Contacto />} />
        <Route index path="" exact element={<Home />} />
        <Route path="*" exact element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
