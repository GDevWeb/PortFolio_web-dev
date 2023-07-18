import React, { useState, useEffect } from "react";
import './Navbar.scss';
import { FaBars} from "react-icons/fa";
import barsIcon from '../../assets/icons/bars.svg'


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
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
      {(toggleMenu || largeur > 768) && (
        <ul className="liste">
          <li className="items"><a href="#home" aria-label="retour à l'accueil">Accueil</a></li>
          <li className="items"><a href="#aboutMe" aria-label="aller à la section à propos de moi">About</a></li>
          <li className="items"><a href="#skills" aria-label="aller à la section mes compétences">Skills</a></li>
          <li className="items"><a href="#portFolio" aria-label="aller à la section portfolio">PortFolio</a></li>
          <li className="items"><a href="#contact" aria-label="aller à la section me contacter">Contact</a></li>
        </ul>
      )}
<button onClick={toggleNav} className="btn">
  <img src={barsIcon} alt="Menu" className="icon" width={"40px"}/>
</button>
    </nav>
  );
}
