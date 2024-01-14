/* eslint-disable react/jsx-no-target-blank */
import github from "../assets/icons8-github-100.png";
import linkedIn from "../assets/icons8-linkedin-100.png";
/* eslint-disable react/no-unescaped-entities */
function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ThisIsHowVillainsAreMade" target="_blank">
        <img src={github} alt="logo GitHub" />
      </a>
      <p>Les recettes d'Océane</p>
      <a href="https://www.linkedin.com/in/oaiw/" target="_blank">
        <img src={linkedIn} alt="logo LinkedIn" />
      </a>
    </div>
  );
}
export default Footer;
