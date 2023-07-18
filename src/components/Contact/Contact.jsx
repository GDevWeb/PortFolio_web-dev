import './Contact.scss';
import mailIcon from "../../assets/icons/envelope.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

export default function Contact() {
  return (
    <>
      <section>
        <div className="title_section short">
          <p>Contact</p>
        </div>
        <div id="contact" className="contact">
          <h2>Me contacter</h2>

          <p>Vous pouvez me contacter</p>

          <div className="contact-links">
            <div className="contact-link">
              <img src={mailIcon} alt="mail icon" className="icon" />
              <a href="mailto: gaetan.dammaretz.dev@gmail.com" target="_blank" rel="noreferrer">mail</a>
            </div>
            <span>ou</span>
            <div className="contact-link">
              <img src={linkedinIcon} alt="linkedin icon" className="icon" />
              <a href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz" target="_blank" rel="noreferrer">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
