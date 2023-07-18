import Cards from "../Cards/Cards";
import mugHotIcon from "../../assets/icons/mugHot.svg";
import netWorkWiredIcon from "../../assets/icons/networkWired.svg";
import handHelpingIcon from "../../assets/icons/handHelping.svg";
import boltIcon from "../../assets/icons/bolt.svg";


export default function SoftSkills() {
  return (
    <>
      <div className="title_section">
        <p>SoftSkills</p>
      </div>
      <div id="skills" className="softSkills">
        <Cards
          icon={<img src={mugHotIcon} alt="mug hot icon" className="icon" />}
          skillName={"caféinoman"}
          description={
            "Je suis un addict café, j'aime boire un bon café tout en discutant avec les collègues"
          }
        />

        <Cards
          icon={
            <img
              src={netWorkWiredIcon}
              alt="network wired icon"
              className="icon"
            />
          }
          skillName={"Travail d'équipe"}
          description={
            "J'aime le travail d'équipe et échanger à propos de divers sujets"
          }
        />

        <Cards
          icon={
            <img
              src={handHelpingIcon}
              alt="hand helping icon"
              className="icon"
            />
          }
          skillName={"Support"}
          description={
            "J'aime apporter de l'aide quand la situation s'y prête et vice versa"
          }
        />

        <Cards
      icon={<img src = {boltIcon} alt="applause icon" className="icon"/>}
      skillName={"Motivation"}
          description={
            "J'aime (re)motiver les collègues quand cela est nécessaire"
          }
        />
      </div>
    </>
  );
}
