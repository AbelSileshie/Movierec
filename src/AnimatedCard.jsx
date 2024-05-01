import React from "react";
{/*import Photo1 from '../assets/pic/photo1.jpeg'
import Photo2 from "../assets/pic/photo2.jpeg";
import Photo3 from "../assets/pic/photo3.jpeg";
*/}import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 2,
    img: Photo2,
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 3,
    img: Photo3,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
   {
    id: 4,
    img: Photo3,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
];
const AnimatedCard = () => {
  return (
    <div className="w-full">

      {/* cards section */}
      <div className="grid grid-cols-0 sm:grid-cols-2 md:grid-cols-3 place-items-center m-1 p-2">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[300px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-3">
                  <Slide cascade>
                    <h1 className=" text-xl font-bold">{title}</h1>
                    <Fade cascade damping={0.02}>
                     <p>{desc}</p> 
                    </Fade>
                    <div className="">
                      <button className="btn mt-auto rounded-lg hover:bg-black/20 duration-300">
                        Read More
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCard;
