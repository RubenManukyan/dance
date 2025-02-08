import Lessons from "../lessons/Lessons";
import TextAndImage from "../textAndImage/TextAndImage";
import "./tutorials.scss";
import { lessons } from "../../lessons";

const Tutorials = () => {
  return (
    <div>
      <TextAndImage place="Ballet" />
      <div className="categories">
        <span className="danceStyle">Beginer</span>
        <div className="categoryRow">
          {lessons
            .filter((item) => item.category === "Beginer")
            .map((item) => {
              return <Lessons item={item} key={item.id} />;
            })}
        </div>
      </div>
      <div className="categories">
        <span className="danceStyle">Intermediate</span>
        <div className="categoryRow">
          {lessons
            .filter((item) => item.category === "Intermediate")
            .map((item) => {
              return <Lessons item={item} key={item.id} />;
            })}
        </div>
      </div>
      <div className="categories">
        <span className="danceStyle">Advanceds</span>
        <div className="categoryRow">
          {lessons
            .filter((item) => item.category === "Advanced")
            .map((item) => {
              return <Lessons item={item} key={item.id} />;
            })}
        </div>
      </div>
      <div className="categories">
        <span className="danceStyle">Profesinal</span>
        <div className="categoryRow">
          {lessons
            .filter((item) => item.category === "Profesinal")
            .map((item) => {
              return <Lessons item={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
