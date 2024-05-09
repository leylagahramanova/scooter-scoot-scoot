import React from "react";
import "./Banner.css";
import  Image  from "next/image";
import circle from './circle-image.png';
import { FaRegCircle } from "react-icons/fa";
import { BiSolidCircleHalf } from "react-icons/bi";
const Banner: React.FC = () => {
  return (
    <>
      <div className="scooter">
        <div className="scoot-back">
          <div className="scoot">
            <h1>Scooter sharing made simple</h1>

            <div className="scootin">
              <p>
                Scoot takes the hassle out of urban mobility. Our bikes are
                placed in convenient locations in each of our cities. Use our
                app to locate the nearest bike, unlock it with a tap, and you are
                away!
              </p>

              <button>
                <a href="/store">Get Scootin</a>
              </button>
            </div>
          </div>
          <div className="symbols">
            <div className="white-circles">
              <div className="white-circle">
                <FaRegCircle style={{ width: "62px", height: "62px" }} />
              </div>
              <div className="white-circle">
                <FaRegCircle style={{ width: "62px", height: "62px" }} />
              </div>
              <div className="white-circle1">
              <Image src={circle} alt=" Circle"/>
              </div>
            </div>
           <div className="zigzag-arrow">
              <div className="horisontal"></div>
              <div className="vertical"></div>
              <div className="horisontal2"></div>
              <div className="big-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
