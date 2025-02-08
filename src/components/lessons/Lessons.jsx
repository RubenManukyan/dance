import "./lessons.scss";
import star from "../../images/star.png";
import { Link } from "react-router-dom";

const Lessons = ({ item }) => {
  return (
    <Link to={`/lessonsInside/${item.id}`}>
      <div
        className="lessonsDance"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <span className="balletDance">{item.title}</span>
        <span className="lessonRate">
          <img src={star} alt="star" />
          {item.rating}
        </span>
        <span className="fourPlaylist">{item.teacher}</span>
      </div>
    </Link>
  );
};

export default Lessons;
