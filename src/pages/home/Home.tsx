// src/pages/Home.jsx
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h2>Beleza com propósito</h2>
        <p>
          Realçar a beleza natural é uma arte. Aqui, cada tratamento é pensado com carinho para valorizar sua essência.
        </p>
        <a className="cta-button" href="/contato">Agende uma avaliação</a>
      </div>
    </section>
  );
}

export default Home;
