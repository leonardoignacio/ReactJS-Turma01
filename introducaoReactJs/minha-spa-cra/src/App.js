import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContatoPage from './pages/ContatoPage';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;

