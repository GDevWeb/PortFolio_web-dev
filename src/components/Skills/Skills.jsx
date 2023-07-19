import React, { useState } from "react";
import SoftSkills from "./SoftSkills";
import Frontend from "./FrontEnd";
import Others from "./BackEnd";
import ClickToAction from "../CTA/ClickToAction";
import BackEnd from "./BackEnd";
import CV from '../../documents/cv_Dammaretz-Gaetan_Dev-Web.pdf';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';


const value = "Télécharger CV";

export default function Skills() {
  const [activeComponent, setActiveComponent] = useState("softSkills");

  const toggleComponent = (component) => {
    setActiveComponent(component);
  };

  const goToPrevious = () => {
    if (activeComponent === "softSkills") {
      toggleComponent("backEnd");
    } else if (activeComponent === "frontend") {
      toggleComponent("softSkills");
    } else {
      toggleComponent("frontend");
    }
  };

  const goToNext = () => {
    if (activeComponent === "softSkills") {
      toggleComponent("frontend");
    } else if (activeComponent === "frontend") {
      toggleComponent("backEnd");
    } else {
      toggleComponent("softSkills");
    }
  };

  return (
    <>
        <div id="skills">
          {activeComponent === "softSkills" && <SoftSkills />}
          {activeComponent === "frontend" && <Frontend />}
          {activeComponent === "backEnd" && <BackEnd />}
        </div>

        <div className="callToAction">
          <a href={CV} target="_blank" rel="noopener noreferrer" download>
            <ClickToAction value={value} />
          </a>
        </div>

        <div className="container_scroll-button">
          <button
            onClick={goToPrevious}
            aria-label="Bouton gauche"
          >
          <img src={arrowLeftIcon} alt="fléche vers la gauche" className="arrow" />
          </button>
          <button
            onClick={() => toggleComponent("softSkills")}
            className={`scrollButton ${
              activeComponent === "softSkills" ? "active" : ""
            }`}
            aria-label="bouton scroll section softSkills"
          >
            {/* SoftSkills button */}
          </button>
          <div className="straight"></div>
          <button
            onClick={() => toggleComponent("frontend")}
            className={`scrollButton ${
              activeComponent === "frontend" ? "active" : ""
            }`}
            aria-label="bouton scroll section frontend front-end"
          >
            {/* Frontend Front-end button */}
          </button>
          <div className="straight"></div>
          <button
            onClick={() => toggleComponent("backEnd")}
            className={`scrollButton ${
              activeComponent === "backEnd" ? "active" : ""
            }`}
            aria-label="bouton scroll section frontend back-end"
          >
            {/* Frontend Back-end button */}
          </button>
          <button
            onClick={goToNext}
            aria-label="flèche suivant"
          >
          <img src={arrowRightIcon} alt="flèche vers la droite" className="arrow" />
          </button>
        </div>
    </>
  );
}
