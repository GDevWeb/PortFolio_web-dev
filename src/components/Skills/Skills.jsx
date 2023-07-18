import React, { useState } from "react";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Others from "./HardSkills_BackEnd";
import ClickToAction from "../CTA/ClickToAction";
import HardSkills_BackEnd from "./HardSkills_BackEnd";
import CV from '../../../public/documents/cv_Dammaretz-Gaetan_Dev-Web.pdf';
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
      toggleComponent("hardSkills_BackEnd");
    } else if (activeComponent === "hardSkills") {
      toggleComponent("softSkills");
    } else {
      toggleComponent("hardSkills");
    }
  };

  const goToNext = () => {
    if (activeComponent === "softSkills") {
      toggleComponent("hardSkills");
    } else if (activeComponent === "hardSkills") {
      toggleComponent("hardSkills_BackEnd");
    } else {
      toggleComponent("softSkills");
    }
  };

  return (
    <>
      <section>
        <div id="skills">
          {activeComponent === "softSkills" && <SoftSkills />}
          {activeComponent === "hardSkills" && <HardSkills />}
          {activeComponent === "hardSkills_BackEnd" && <HardSkills_BackEnd />}
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
            onClick={() => toggleComponent("hardSkills")}
            className={`scrollButton ${
              activeComponent === "hardSkills" ? "active" : ""
            }`}
            aria-label="bouton scroll section hardSkills front-end"
          >
            {/* HardSkills Front-end button */}
          </button>
          <div className="straight"></div>
          <button
            onClick={() => toggleComponent("hardSkills_BackEnd")}
            className={`scrollButton ${
              activeComponent === "hardSkills_BackEnd" ? "active" : ""
            }`}
            aria-label="bouton scroll section hardSkills back-end"
          >
            {/* HardSkills Back-end button */}
          </button>
          <button
            onClick={goToNext}
            aria-label="flèche suivant"
          >
          <img src={arrowRightIcon} alt="flèche vers la droite" className="arrow" />
          </button>
        </div>
      </section>
    </>
  );
}
