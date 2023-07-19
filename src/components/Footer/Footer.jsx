import './Footer.scss';
import mailIcon from '../../assets/icons/envelope.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Dammaretz Gaëtan</p>
        </div>
        <div className="social-links">
          <a href="mailto:gaetan.dammaretz.dev@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src = {mailIcon} alt="mail icon" className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz" target="_blank" rel="noopener noreferrer">
          <img src = {linkedinIcon} alt="linkedin icon" className="icon"/>
          </a>
          <a href="https://github.com/Aescanor" target="_blank" rel="noopener noreferrer">
          <img src = {githubIcon} alt="githhub icon" className="icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
