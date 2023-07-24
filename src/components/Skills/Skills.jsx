import React, { useState } from "react";
import SoftSkills from "./SoftSkills";
import Frontend from "./FrontEnd";
import Others from "./Others";
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
      toggleComponent("others");
    } else if (activeComponent === "others") {
      toggleComponent("backend");
    } else if(activeComponent === "backend"){
      toggleComponent("frontEnd")
    }else {
      toggleComponent("others");
    }
  };

  const goToNext = () => {
    if (activeComponent === "softSkills") {
      toggleComponent("frontend");
    } else if (activeComponent === "frontend") {
      toggleComponent("backEnd");
    }else if (activeComponent === "backend"){
      toggleComponent("others")
    }else if(activeComponent === "others"){
    toggleComponent("softSkills");
    }else{
      toggleComponent("others");
    }
  };
    
    

  return (
    <>
        <div id="skills">
          {activeComponent === "softSkills" && <SoftSkills />}
          {activeComponent === "frontend" && <Frontend />}
          {activeComponent === "backEnd" && <BackEnd />}
          {activeComponent === "others" && <Others />}
        </div>

        <div className="callToAction">
          <a href={CV} target="_blank" rel="noopener noreferrer" download>
            <ClickToAction value={value} />
          </a>
        </div>

{/* Previous arrow :  */}
        <div className="container_scroll-button">
          <button
            onClick={goToPrevious}
            aria-label="Bouton gauche"
          >

          <img src={arrowLeftIcon} alt="fléche vers la gauche" className="arrow" />
          </button>

          {/* SoftSkills button */}
          <button
            onClick={() => toggleComponent("softSkills")}
            className={`scrollButton ${
              activeComponent === "softSkills" ? "active" : ""
            }`}
            aria-label="bouton scroll section softSkills"
          >
          </button>

          <div className="straight"></div>

          {/* Frontend Front-end button */}
          <button
            onClick={() => toggleComponent("frontend")}
            className={`scrollButton ${
              activeComponent === "frontend" ? "active" : ""
            }`}
            aria-label="bouton scroll section frontend front-end"
          >
          </button>

          <div className="straight"></div>

          {/* Frontend Back-end button */}
          <button
            onClick={() => toggleComponent("backEnd")}
            className={`scrollButton ${
              activeComponent === "backEnd" ? "active" : ""
            }`}
            aria-label="bouton scroll section frontend back-end"
          >

          </button>

          <div className="straight"></div>

          {/* Skills Others button */}
          <button
            onClick={() => toggleComponent("others")}
            className={`scrollButton ${
              activeComponent === "others" ? "active" : ""
            }`}
            aria-label="bouton scroll section others skills"
          >

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
