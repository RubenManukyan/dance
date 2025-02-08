import TextAndImage from "../textAndImage/TextAndImage";
import "./fitness.scss";
import Chest from "../../images/Icons/Chest.png";
import Back from "../../images/Icons/Back.png";
import Arms from "../../images/Icons/Arms.png";
import Legs from "../../images/Icons/Legs.png";
import Cabs from "../../images/Icons/cabs.png";
import Butt from "../../images/Icons/Butt.png";
import { useState } from "react";

const items = [
  {
    image: Arms,
    title: "Arm",
  },
  {
    image: Chest,
    title: "Chest",
  },
  {
    image: Back,
    title: "Back",
  },
  {
    image: Legs,
    title: "Leg",
  },
  {
    image: Cabs,
    title: "Cabs",
  },
  {
    image: Butt,
    title: "Butt",
  },
];

const frameList = {
  Arm: [
    "https://www.youtube.com/embed/xyjALcNv_5Y?si=XT2FGoP1ukAF_eil",
    "https://www.youtube.com/embed/UY6-JzdnHUM?si=8h2TDffFcWNDsT3H",
    "https://www.youtube.com/embed/SUq6-D_TBVQ?si=4lIvzsyaF25l2muH",
  ],
  Chest: [
    "https://www.youtube.com/embed/fSAw0_tsZ6U?si=AoQCA49OhZ5kUZf6",
    "https://www.youtube.com/embed/zxQpfu7fIfc?si=-PTQeoeGIjMFgtI9",
    "https://www.youtube.com/embed/rxEMKXW2Wqs?si=D1_ETUHR63H7o_ai",
  ],
  Back: [
    "https://www.youtube.com/embed/Sa0sBKUiOvU?si=ZynYmcg02iZwUorJ",
    "https://www.youtube.com/embed/kCF9MmHAJSk?si=Ipbug3kRuEqVsFPL",
    "https://www.youtube.com/embed/ClzTDsQDC0E?si=LDH1m8jHWOr5UApY",
  ],
  Leg: [
    "https://www.youtube.com/embed/r4aMIs0ouPU?si=iBQikTjCfNftcrNi",
    "https://www.youtube.com/embed/EsxpZcApZDs?si=wnC4li0Vgw8TlhAQ",
    "https://www.youtube.com/embed/X7SFv58YSJM?si=BOw2F0RgG7-CHRRT",
  ],
  Cabs: [
    "https://www.youtube.com/embed/uVu9vToACiQ?si=bzpLzPQLVmZsAgLX",
    "https://www.youtube.com/embed/X7ZKo-IRc_U?si=sL6x6EXs_5F1XbJJ",
    "https://www.youtube.com/embed/94vHVZIjeKA?si=LB-vBl1UZXTLK76R",
  ],
  Butt: [
    "https://www.youtube.com/embed/wPTXY_zYYcM?si=7sZvMXyBHpZ-TeVG",
    "https://www.youtube.com/embed/6pKKnVg1hzE?si=9hqVEJNlyo7Pcos7",
    "https://www.youtube.com/embed/LyhYmkZWZPs?si=greypoQSpO41fDk0",
  ],
};

const Fitness = () => {
  const [category, setCategory] = useState('Arm');
  return (
    <div className="fitness">
      <TextAndImage place="Fitness" />
      <div className="bodyWorkout">
        {items.map((item) => {
          return (
            <div onClick={() => setCategory(item.title)}>
              <h2>{item.title} Workouts</h2>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="fitnessVideos">
        {
          frameList[category].map((item)=> {
            return (
              <iframe
                width="560"
                height="315"
                src={item}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )
          })
        }
      </div>
    </div>
  );
};

export default Fitness;
// use map insted of image
