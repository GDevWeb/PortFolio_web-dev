import React from 'react';
import Cards from '../Cards/Cards';
import figmaIcon from '../../assets/icons/figma.svg';
import githubIcon from '../../assets/icons/github.svg';


export default function Others() {
  return (
    <>
    
    <div className="title_section short">
        <p>Skills</p>
        <p>Autres :</p>
    </div>

    <div id="skills" className="others">
        <Cards 
            icon={<img src = {figmaIcon} alt='figma icon'className='icon'/>}
            skillName={"Figma"}
            description={"Utilisation rudimentaire pour le maquettage des projets"}
        />
        <Cards 
            icon={<img src = {githubIcon} alt='figma icon'className='icon'/>}
            skillName={"Github"}
            description={"Utilisation courante de GitHub"}
        />
    </div>
    
    </>
  )
}
