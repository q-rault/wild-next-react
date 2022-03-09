import Image from "next/image";
import blank_profile from "../public/blank_profile_picture.png";

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          <article className="card">
            <Image src={blank_profile} alt="Jane Doe Profile" />
            <h3>Jane Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <ul className="skills">
              <li>
                HTML
                <span className="votes">3</span>
              </li>
              <li>
                CSS
                <span className="votes">3</span>
              </li>
              <li>
                Typescript
                <span className="votes">3</span>
              </li>
              <li>
                React
                <span className="votes">3</span>
              </li>
              <li>
                Node <span className="votes">2</span>
              </li>
            </ul>
          </article>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
