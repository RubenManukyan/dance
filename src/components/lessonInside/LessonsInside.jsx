import { useParams } from "react-router-dom";
import "./lessonsInside.scss";
import { lessons } from "../../lessons";
import { Rating } from "react-simple-star-rating";
import Lessons from "../lessons/Lessons";
import { useEffect } from "react";

const LessonsInside = () => {
  const { id } = useParams();
  const lesson = lessons.find((item) => {
    return item.id === Number(id);
  });

  const similar = lessons.filter((item) => {
    return item.category === lesson.category && item.id !== Number(id);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="lessonsInside">
      <div className="lessonsInsideTitle">{lesson.title}</div>
      <div className="lessonBox">
        <div
          className="lessonLeft"
          style={{ backgroundImage: `url(${lesson.img})` }}
        ></div>
        <div className="lessonRight">
          <span>About the class</span>
          <p>{lesson.description}</p>
        </div>
      </div>
      <div className="teacherAndRate">
        <span>{lesson.teacher}</span>
        <Rating
          initialValue={lesson.rating}
          readonly
          allowFraction
          fillColor="#55BB99"
          size={24}
        />
      </div>
      <div className="similar">
        <span className="danceStyle">Next lessons</span>
        <div className="categoryRow">
          {similar.map((item) => {
            return <Lessons item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LessonsInside;
