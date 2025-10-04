import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#334155', marginBottom: '1rem' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/contato" style={{ color: 'white', marginRight: '1rem' }}>Contato</Link>
      <Link to="/about" style={{ color: 'white' }}>Sobre</Link>
    </nav>
  );
}
export default Header;