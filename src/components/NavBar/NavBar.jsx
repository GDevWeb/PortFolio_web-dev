import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.scss';
import barsIcon from '../../assets/icons/bars.svg'


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  // Fonction pour refermer la liste
  const closeMenu = () => {
    setToggleMenu(false);
  };


  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 425 && largeur > 2560 ) && (
        <ul className="liste">
          <li className="items"><Link to="/" onClick={closeMenu} aria-label="retour à l'accueil">Accueil</Link></li>
          <li className="items"><Link to="/" onClick={closeMenu} aria-label="aller à la section à propos de moi">About</Link></li>
          <li className="items"><Link to="/skills" onClick={closeMenu} aria-label="aller à la section mes compétences">Skills</Link></li>
          <li className="items"><Link to="/portFolio" onClick={closeMenu} aria-label="aller à la section portfolio">PortFolio</Link></li>
          <li className="items"><Link to="/contact" onClick={closeMenu} aria-label="aller à la section me contacter">Contact</Link></li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        <img src={barsIcon} alt="Menu" className="icon" width={"40px"} />
      </button>
    </nav>
  );
}
