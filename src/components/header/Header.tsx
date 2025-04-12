// src/components/Header.jsx
import { Link } from "react-router-dom";
import './Header.css';

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="logo">Dra. Ana Costa</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/portfolio">Portfólio</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li>
            <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
