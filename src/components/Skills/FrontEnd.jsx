import Cards from '../Cards/Cards';
import htmlIcon from '../../assets/icons/html5.svg';
import sassIcon from '../../assets/icons/sass.svg';
import tailWindIcon from '../../assets/icons/tailwind.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react.svg';



export default function FrontEnd() {
  return (
    <>

    <div className="title_section short">
      <p>HardSkills</p>
      <p>Front-end</p>
    </div>
    <div id="skills" className="hardSkills">


    <Cards 
      icon={<img src = {htmlIcon} alt="html icon" className="icon"/>}
      skillName={"HTML"}
    description={"Le basique du web"}
    />

    <Cards 
      icon={<img src = {sassIcon} alt="sass icon" className="icon"/>}
      skillName={"SASS"}
    description={"pourquoi taper du simple C.S.S lorsque l'on connaît un bon préprocesseur ?"}
    />

    <Cards 
      icon={<img src = {tailWindIcon} alt="tailWind icon" className="icon"/>}
      skillName={"TailWind"}
    description={"Quand on veut un css vite fait bien fait, il n'y a pas que BootStrap ! 🤢"}
    />

    <Cards 
      icon={<img src = {javascriptIcon} alt="javascript icon" className="icon"/>}
      skillName={"Javascript"}
    description={"Mon premier langage de programmation 💓"}
    />
    <Cards 
      icon={<img src = {reactIcon} alt="react icon" className="icon"/>}
      skillName={"React"}
    description={"Mon premier Framework JS"}
    />
    <Cards 
      icon={<img src = {reactIcon} alt="react icon" className="icon"/>}
      skillName={"Prochainement"}
    description={"Dans le prochain épisode ..."}
    />

    </div>
    </>
  )
}
