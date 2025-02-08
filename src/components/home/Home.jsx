import "./home.scss";
import Categories from "../categories/Categories";
import TextAndImage from "../textAndImage/TextAndImage";

const Home = () => {
  const dance = [
    {
      title: "Ballet",
      playlist: "4",
      video: "36",
    },
    {
      title: "Street dance",
      playlist: "5",
      video: "42",
    },
    {
      title: "Hip Hop",
      playlist: "4",
      video: "32",
    },
    {
      title: "Jazz",
      playlist: "3",
      video: "29",
    },
  ];
  const choreography = [
    {
      title: "Solo",
      playlist: "3",
      video: "29",
    },
    {
      title: "Group",
      playlist: "3",
      video: "29",
    },
    {
      title: "Partner",
      playlist: "3",
      video: "29",
    },
  ];
  const tutorials = [
    {
      title: "Beginer",
      playlist: "3",
      video: "29",
    },
    {
      title: "Intermidiate",
      playlist: "3",
      video: "29",
    },
    {
      title: "Advanced",
      playlist: "3",
      video: "29",
    },
  ];
  const fitness = [
    {
      title: "Zumba",
      playlist: "4",
      video: "36",
    },
    {
      title: "Cardio Dance",
      playlist: "5",
      video: "42",
    },
  ];

  return (
    <div className="home">
      <TextAndImage place="Dance" />
      <div className="categories">
        <span className="danceStyle">Dance Styles</span>
        <div className="categoryRow">
          {dance.map((item) => {
            return <Categories item={item} />;
          })}
        </div>
      </div>
      <div className="categories">
        <span className="danceStyle">Choreography</span>
        <div className="categoryRow">
          {choreography.map((item) => {
            return <Categories item={item} />;
          })}
        </div>
      </div>
      <div className="categories">
        <span className="danceStyle">Tutorials</span>
        <div className="categoryRow">
          {tutorials.map((item) => {
            return <Categories item={item} />;
          })}
        </div>
      </div>
      <div className="categories">
        <span className="danceStyle">Fitness</span>
        <div className="categoryRow">
          {fitness.map((item) => {
            return <Categories item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
