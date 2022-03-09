import WilderCard from "../components/WilderCard.component";
import wildersData from "./CardList.data";

const CardList = () => {
  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wildersData.map((wilder) => (
          <WilderCard key={wilder.name} wilder={wilder} />
        ))}
      </section>
    </main>
  );
};

export default CardList;
