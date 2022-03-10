import WilderCard from "./WilderCardComponent";
import wildersData from "./CardList.data";
import styles from "../styles/CardListStyles.module.css";

const CardList = () => {
  return (
    <main className={styles.container}>
      <h2>Wilders</h2>
      <section className={styles["card-row"]}>
        {wildersData.map((wilder) => (
          <WilderCard key={wilder.name} wilder={wilder} styles={styles} />
        ))}
      </section>
    </main>
  );
};

export default CardList;
