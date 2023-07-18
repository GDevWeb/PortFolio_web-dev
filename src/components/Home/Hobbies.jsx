import Cards from "../Cards/Cards";
import dumbbellIcon from '../../assets/icons/dumbbell.svg';
import bookReaderIcon from '../../assets/icons/bookReader.svg';
import filmIcon from '../../assets/icons/film.svg';
import gamePadIcon from '../../assets/icons/gamepad.svg';


export default function Hobbies() {



  return (
    <>
      <div className="title_section short">
        <p>Loisirs </p>
      </div>
    <div id='introduction' className='hobbies'>

      <Cards
      icon={<img src = {dumbbellIcon} alt="Dumbbell icon" className="icon"/>}
      skillName={"Sport"}
      description={"Depuis tout petit je pratique divers activités sportives tels que la course à pieds, le powerLifting entre autres"}
      />

      <Cards
      icon={<img src = {bookReaderIcon} alt="book reader icon" className="icon"/>}
      skillName={"Lecture"}
      description={"J'aime lire différents genre de livre mais je me découvre un intérêt particulier pour les S.F"}
      />

      <Cards
      icon={<img src = {filmIcon} alt="film icon" className="icon"/>}
      skillName={"Cinéma"}
      description={"Un cinéma en famille ou entre amis, je suis partant. Surtout si c'est de la S.F"}
      />

      <Cards
      icon={<img src = {gamePadIcon} alt="gamepad icon" className="icon"/>}
      skillName={"Jeux-vidéos"}
      description={"Une partie de Switch ou PS5 en famille ou entre amis"}
      />

    </div>
      </>
  )
}
// here presents hobbies under component card 