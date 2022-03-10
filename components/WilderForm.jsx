import { useState } from "react";
import axios from "axios";
import apiRequests from "../config/apiRequests.config";
import styles from "../styles/WilderFormStyles.module.css";

function AddWilderForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(apiRequests.wilderCreateString, {
        name: name,
        city: city,
      });
      if (result.data.success) {
        setError("");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name-input" className={styles.label}>
        Name :
      </label>
      <input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <label htmlFor="city-input">City :</label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.input}
      />
      {error !== "" && <p>{error}</p>}
      <button className={styles.button}>Add</button>
    </form>
  );
}

export default AddWilderForm;
