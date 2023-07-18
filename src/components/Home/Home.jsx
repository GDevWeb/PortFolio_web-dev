import { useState } from 'react';
import ClickToAction from '../CTA/ClickToAction';
import Introduction from './Introduction';
import Presentation from './presentation';
import Hobbies from './Hobbies';
import CV from '../../documents/cv_Dammaretz-Gaetan_Dev-Web.pdf';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

const value = "Télécharger CV";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("introduction");

  const toggleComponent = (component) => {
    setActiveComponent(component);
  };

  const goToPrevious = () => {
    if (activeComponent === "introduction") {
      toggleComponent("hobbies");
    } else if (activeComponent === "presentation") {
      toggleComponent("introduction");
    } else {
      toggleComponent("presentation");
    }
  };

  const goToNext = () => {
    if (activeComponent === "introduction") {
      toggleComponent("presentation");
    } else if (activeComponent === "presentation") {
      toggleComponent("hobbies");
    } else {
      toggleComponent("introduction");
    }
  };

  return (
    <>
    <section>
      <div id="aboutMe" className="container home">
        {activeComponent === "introduction" && <Introduction />}
        {activeComponent === "presentation" && <Presentation />}
        {activeComponent === "hobbies" && <Hobbies />}
      </div>

        <div className="callToAction">
          <a href={CV} target="_blank" rel="noopener noreferrer" download>
            <ClickToAction value={value} />
          </a>
        </div>
      <div className="container_scroll-button">
        <button onClick={goToPrevious} aria-label="Bouton gauche">
          <img src={arrowLeftIcon} alt="fléche vers la gauche" className="arrow" />
        </button>
        <button
          onClick={goToNext}
          className={`scrollButton ${activeComponent === "introduction" ? "active" : ""}`}
          aria-label="bouton numéro 1"
        >
        </button>
        <div className="straight"></div>
        <button
          onClick={goToNext}
          className={`scrollButton ${activeComponent === "presentation" ? "active" : ""}`}
          aria-label="bouton numéro 2"
        >
        </button>
        <div className="straight"></div>
        <button
          onClick={() => toggleComponent("hobbies")}
          className={`scrollButton ${activeComponent === "hobbies" ? "active" : ""}`}
          aria-label="bouton numéro 3"
        ></button>

        <button onClick={goToNext} aria-label='flèche suivant'>
          <img src={arrowRightIcon} alt="flèche vers la droite" className="arrow" />
        </button>
      </div>
    </section>
    </>
  );
}
