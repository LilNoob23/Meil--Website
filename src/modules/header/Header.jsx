import { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [showModal, setShowModal] = useState(false);
  console.log("🏝️ ~ Header ~ showModal:", showModal)
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
      <div>
        <img src="" alt="Meilin logo" width={100} />
      </div>
      <div className="header-options">
        <ul>
          <li>Sobre mí</li>
          <li>Producciones artísticas</li>
          <li>Productos</li>
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
            <li>Sobre mí</li>
            <li>Producciones artísticas</li>
            <li>Productos</li>
          </ul>
        </div>
    </header>
  );
}

export default Header;
