import Cards from '../Cards/Cards';
import dataBaseIcon from '../../assets/icons/database.svg';
import phpIcon from '../../assets/icons/php.svg';
import nodeJsIcon from '../../assets/icons/node.svg';
import laravelIcon from '../../assets/icons/laravel.svg';


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
    description={"MySQL c'est la BASE des Bases du Back 😁"}
    />

    <Cards 
      icon={<img src = {phpIcon} alt="php icon" className="icon"/>}
      skillName={"PHP"}
    description={"En cours d'apprentissage 🧑‍🎓"}
    />

    <Cards 
      icon={<img src = {nodeJsIcon} alt="nodejs icon" className="icon"/>}
      skillName={"NodeJs"}
    description={"Un langage côté serveur qui me parle ! 😊"}
    />

    <Cards 
      icon={<img src = {laravelIcon} alt="laravel icon" className="icon"/>}
      skillName={"Laravel"}
    description={"À venir"}
    />

    </div>
    </>
  )
}
