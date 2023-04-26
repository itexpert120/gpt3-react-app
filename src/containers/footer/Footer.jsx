import "./footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <>
      <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">
            Do you want to step in to the future before others
          </h1>
          <button type="button">Request Early Access</button>
        </div>
        <div className="gpt3__footer-container">
          <div className="gpt3__footer-container__branding">
            <img src={logo} alt="Logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-container__links">
            <ul className="gpt3__foother-container__links-section">
              <li>
                <h1>Links</h1>
              </li>
              <li>
                <a href="">Overons</a>
              </li>
              <li>
                <a href="">Social Media</a>
              </li>
              <li>
                <a href="">Counters</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <ul className="gpt3__foother-container__links-section">
              <li>
                <h1>Company</h1>
              </li>
              <li>
                <a href="">Terms & Condition</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <ul className="gpt3__foother-container__links-section">
              <li>
                <h1>Get in touch</h1>
              </li>
              <li>
                <a href="">Crechterwoord K12 182 DK Alknjkcb</a>
              </li>
              <li>
                <a href="">085-132567</a>
              </li>
              <li>
                <a href="">info@payme.net</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="gpt3__footer-trademark">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
