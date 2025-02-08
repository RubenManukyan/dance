import "./textAndImage.scss";
import dancer from "../../images/dancer.png";
import ballet from "../../images/ballet.png";
import fitness from "../../images/fitness.png";

const TextAndImage = ({ place }) => {
  return (
    <div className="homeTextAndImage">
      <span className="homeText">
        Unlock The Power Of <span className="danceBlue">{place}</span>
      </span>
      {place === "Dance" ? (
        <img src={dancer} alt="dancer" />
      ) : place === "Ballet" ? (
        <img src={ballet} alt="ballet" />
      ) : (
        <img src={fitness} alt="fitness" />
      )}
    </div>
  );
};

export default TextAndImage;
