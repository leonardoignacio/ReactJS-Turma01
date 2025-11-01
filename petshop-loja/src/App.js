import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cabecalho from './components/Cabecalho';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';

// Admin
import Admin from './paginas/admin/Admin';
import FormCategoria from './paginas/admin/components/FormCategoria';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/categoria/:id/*" element={<Categoria />} />
        <Route path="/posts/:id" element={<Post />} />

        {/* Rotas administrativas */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/NovaCategoria" element={<FormCategoria />} />
        
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </Router>
  );
}

export default App;
