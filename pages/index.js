import axios from "axios";
import { useEffect, useState } from "react";
import AddWilderForm from "../components/WilderForm";
import CardList from "../components/CardListComponent";
import apiRequests from "../config/apiRequests.config";

const Home = () => {
  const [wilders, setWilders] = useState([]);
  const fetchData = async () => {
    try {
      const result = await axios.get(apiRequests.wilderReadString);
      setWilders(result.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <AddWilderForm />
      <CardList wilders={wilders} />
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
