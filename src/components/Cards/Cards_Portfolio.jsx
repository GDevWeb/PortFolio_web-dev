import img from '../../../public/img/vignette.png';
import githubIcon from '../../assets/icons/github.svg';
import codesandboxIcon from '../../assets/icons/codesandbox.svg';


export default function CardPortfolio({id, projectName, description, trailer, githubLink, codeSandBoxLink, type }) {
  return (
    <div className='card portfolioCard'>

        {id}

      <div className="projectName">
        {projectName}
      </div>

      <figure className="image">
        <img src={img} alt={projectName}/>
      </figure>

      <div className="description">
        {description}
      </div>

<div className="social-Dev-Links">
      <div className="githubLink">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="github icon" className="icon" />
        </a>
      </div>
      <div className="codeSandBoxLink">
        <a href={codeSandBoxLink} target="_blank" rel="noopener noreferrer">
        <img src={codesandboxIcon} alt="linkedin icon" className="icon" />
        </a>
      </div>
</div>

      <div className="type">
        {type === "Front-end" ? (
          <div style={{ color: "#FF4A57" }}><p className="typing">Front-end</p></div>
        ) : (
          <div style={{ color: "green" }}><p className="typing">Back-end</p></div>
        )}
      </div>

    </div>
  );
}
