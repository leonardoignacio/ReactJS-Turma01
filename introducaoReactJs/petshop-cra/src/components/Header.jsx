import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PawIcon } from '../assets/PawPrint.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <PawIcon className={styles.logoIcon} />
        <span className={styles.logoText}>PetLovers</span>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/about" className={styles.link}>Sobre</NavLink>
        <NavLink to="/contact" className={styles.link}>Contato</NavLink>
      </nav>
    </header>
  );
}

export default Header;