// src/pages/Portfolio.jsx
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfólio</h2>
      <div className="gallery">
        {/* Substitua pelos seus elementos de imagem */}
        <div className="img-box"><img src="/img1.jpg" alt="Tratamento 1" /></div>
        <div className="img-box"><img src="/img2.jpg" alt="Tratamento 2" /></div>
        <div className="img-box"><img src="/img3.jpg" alt="Tratamento 3" /></div>
      </div>
    </section>
  );
}

export default Portfolio;
