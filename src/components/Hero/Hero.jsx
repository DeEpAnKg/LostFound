import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Found <br />
              Your Beloved 
              <br /> Pet
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Lost and found pets - a second chance for happiness</span>
            <span>Every lost pet deserves a homecoming story</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Pet Id:"/>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={880} end={900} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Discover Pets</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={195} end={200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            {/* <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText"></span>
            </div> */}
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
