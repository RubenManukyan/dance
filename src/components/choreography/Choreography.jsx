import "./choreography.scss";
import fitnessPic from "../../images/DALL·E 2025-01-31 19.10.16 - A futuristic fitness scene with people exercising in a high-tech gym. The atmosphere is illuminated with greenish-blue neon lights, reflecting off sle.webp"

const Choreography = () => {
  return (
    <div className="bigFitness">
      <div className="choreography">
        <div className="chTitle">Dance Choreography</div>
        <p className="chText">
        Dance is more than just movement—it's a story told through rhythm, emotion, 
        and expression. It is an art form that transcends words, allowing individuals
         to communicate feelings, experiences, and cultures through graceful motion. 
         Our choreography blends creativity and precision, offering a unique platform 
         for dancers of all levels to connect, learn, and shine. Whether you're stepping 
         onto the dance floor for the first time, refining your technique for a performance, 
         or immersing yourself in a new style, we provide the inspiration, guidance, and 
         community to support your journey. From classical elegance to high-energy routines,
          we bring artistry and passion to every step. Dance is not just about learning steps—it's 
          about building confidence, fostering creativity, and embracing the joy of movement. 
        Join us and experience the transformative power of dance as it enriches your body, mind, and soul!
        </p>
        <button className="join-now-button">Join Now</button>
      </div>
      <img className="fitnessPic" src={fitnessPic} alt="fitness"/>
    </div>
  );
};

export default Choreography;
