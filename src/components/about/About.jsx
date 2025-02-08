import "./about.scss";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import twit from "../../images/twit.png";
import insta from "../../images/insta.png";
import youtube from "../../images/youtube.png";
import qrCode from "../../images/qrCode.png";

const About = ({ item }) => {
  return (
    <div className="about">
      <div className="aboutDiv">
        <span className="aboutTitle">About</span>
        <p className="aboutInfo">
          At HubDance, we are passionate about spreading the joy of dance and
          helping individuals of all skill levels discover their inner dancer.
          Our mission is to provide high-quality dance tutorials, valuable
          resources, and a supportive community for dancers around the world.
        </p>
      </div>
      <div className="infoAndQr">
        <div className="contactItems">
          <span className="contactTitle">Contact</span>
          <span className="infoContacts">
            <img src={phone} alt="phone" />
            <span>+55 11 1234-1234</span>
          </span>
          <span className="infoContacts">
            <img src={email} alt="email" />
            <span>sphubdance@mail.com</span>
          </span>
          <span className="infoContacts">
            <img src={twit} alt="twit" />
            <span>@hubdance</span>
          </span>
          <span className="infoContacts">
            <img src={insta} alt="insta" />
            <span>@hubdance</span>
          </span>
          <span className="infoContacts">
            <img src={youtube} alt="youtube" />
            <span>/hubdance</span>
          </span>
        </div>
        <img src={qrCode} alt="qr" className="qr" />
      </div>
    </div>
  );
};

export default About;
