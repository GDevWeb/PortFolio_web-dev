import Cards from '../Cards/Cards';
import dataBaseIcon from '../../assets/icons/database.svg';
import phpIcon from '../../assets/icons/php.svg';
import nodeJsIcon from '../../assets/icons/node.svg';


export default function BackEnd() {
  return (
    <>

    <div className="title_section short">
      <p>HardSkills</p>
      <p>Back-end</p>
    </div>
    <div id="skills" className="hardSkills">


    <Cards 
      icon={<img src = {dataBaseIcon} alt="database icon" className="icon"/>}
    skillName={"MYSQL"}
    description={"Que dire à son sujet ... Lui et moi on apprend à se connaître !"}
    />

    <Cards 
      icon={<img src = {phpIcon} alt="php icon" className="icon"/>}
      skillName={"PHP"}
    description={"PHP, je connaîs les rudiments mais je ne suis pas bons usager pour le moment ... !"}
    />

    <Cards 
      icon={<img src = {nodeJsIcon} alt="nodejs icon" className="icon"/>}
      skillName={"NodeJs"}
    description={"Un langage côté serveur qui me parle ! 😊"}
    />


    </div>
    </>
  )
}
