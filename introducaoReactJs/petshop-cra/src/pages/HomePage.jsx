import Card from '../components/Card';
import styles from './HomePage.module.css';

const pets = [
  { name: "Rex", species: "Cachorro" },
  { name: "Miau", species: "Gato" },
  { name: "Piu", species: "Pássaro" },
  { name: "Nemo", species: "Peixe" },
  { name: "Hamtaro", species: "Hamster" },
  { name: "Veloz", species: "Tartaruga" }
];

function HomePage() {
  return (
    <main className={styles.home}>
      <h1 className={styles.title}>Nossos Amigos</h1>
      <div className={styles.cardGrid}>
        {pets.map((pet, index) => (
          <Card key={index} name={pet.name} species={pet.species} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
