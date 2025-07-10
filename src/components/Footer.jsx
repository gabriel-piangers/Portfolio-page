import linkedInIcon from "../assets/linkedin-icon.svg";
import mailIcon from "../assets/gmail-icon.svg";
import githubIcon from "../assets/github-mark-white.svg";

export function Footer() {
  return (
    <footer>
      <div className="footer-socials">
        <div
          className="footer-contact"
          onClick={() => window.open("https://www.linkedin.com/in/gabriel-piangers/")}
        >
          <img
            src={linkedInIcon}
            alt="Linkedin logo"
            className="contact-icon"
          />
          <p className="contact-p">LinkedIn</p>
        </div>
        <div
          className="footer-contact"
          onClick={() => window.open("mailto:piangersgabriel@gmail.com")}
        >
          <img src={mailIcon} alt="gmail logo" className="contact-icon" />
          <p className="contact-p">Email Me</p>
        </div>
        <div
          className="footer-contact"
          onClick={() => window.open("https://github.com/gabriel-piangers")}
        >
          <img src={githubIcon} alt="github logo" className="contact-icon" />
          <p className="contact-p">Github</p>
        </div>
      </div>
    </footer>
  );
}
