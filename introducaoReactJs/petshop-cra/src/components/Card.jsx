import styles from './Card.module.css';
import { ReactComponent as PawIcon } from '../assets/PawPrint.svg';

function Card({ name, species }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <PawIcon className={styles.icon} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.species}>{species}</p>
    </div>
  );
}

export default Card;
