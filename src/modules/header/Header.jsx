import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);
  console.log("🏝️ ~ Header ~ showModal:", showModal);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setShowModal(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="container">
      <div className="fade-in">
        <img src="" alt="Meilin logo" width={100} />
      </div>
      <div className="header-options fade-in">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/producciones-artisticas">Producciones artisticas</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </div>
      <img
        src="/icons/menu.svg"
        alt="menu"
        width={25}
        className="menu-icon"
        onClick={() => setShowModal(true)}
      />
      <div className={`default ${showModal ? "show-modal" : ""}`}>
        <div className="close-container">
          <img
            src="/icons/close.svg"
            alt="menu"
            width={25}
            className="menu-icon"
            onClick={() => setShowModal(false)}
          />
        </div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/producciones-artisticas">Producciones artisticas</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
