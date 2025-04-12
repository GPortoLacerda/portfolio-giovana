// src/pages/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem..." required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
