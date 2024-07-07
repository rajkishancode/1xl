import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import catTopLeft from "../../assets/cat_top_left.png";
import dogTopRight from "../../assets/dog_top_right.png";
import dogBottomLeft from "../../assets/dog_bottom_left.png";
import dogBottomRight from "../../assets/dog_bottom_right.png";
import dogCenter from "../../assets/dog_center.png";
import dogBone from "../../assets/dog_bone.png";
import dogLeash from "../../assets/dog_leash.png";
import pawDoodle from "../../assets/paw_doodle.png";
import "./style.css";

// Define the initial positions and delays for images
const images = [
  { src: catTopLeft, initial: { x: -100, y: -100, rotate: -30 }, delay: 0.5 },
  { src: dogTopRight, initial: { x: 100, y: -100, rotate: 30 }, delay: 1 },
  { src: dogBottomLeft, initial: { x: -100, y: 100, rotate: 30 }, delay: 1.5 },
  { src: dogBottomRight, initial: { x: 100, y: 100, rotate: -30 }, delay: 2 },
  { src: dogCenter, initial: { x: 0, y: 0, rotate: 0 }, delay: 2.5 },
];

// Define the text sequences
const textSequences = [
  { text: "Taking care", delay: 2 },
  { text: "for your", delay: 2 },
  { text: "Pets!", delay: 2 },
  { text: "Get various services personalised for your pets like", delay: 4 },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [stacked, setStacked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    if (currentIndex < textSequences.length - 1) {
      const timer = setTimeout(() => {
        setAnimate(false);
        const nextIndex = currentIndex + 1;
        setTimeout(() => setCurrentIndex(nextIndex), 300); // small delay to remove animation class
      }, textSequences[currentIndex].delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStacked(true);
      const navigateTimer = setTimeout(() => {
        navigate("/categories"); // Redirect to categories page after animation
      }, 4000); // Delay for final animation before redirect
      return () => clearTimeout(navigateTimer);
    }, 8000); // Time to start stacking after text animations
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-splashBg -z-10">
        {/* Add doodle images for the splash effect */}
        <img
          src={dogBone}
          alt="Dog Bone"
          className="absolute top-10 left-10 w-16 h-16 opacity-50"
        />
        <img
          src={dogLeash}
          alt="Dog Leash"
          className="absolute top-20 right-20 w-16 h-16 opacity-50"
        />
        <img
          src={pawDoodle}
          alt="Paw Doodle"
          className="absolute bottom-20 left-20 w-16 h-16 opacity-50"
        />
        <img
          src={dogBone}
          alt="Dog Bone"
          className="absolute bottom-10 right-10 w-16 h-16 opacity-50"
        />
      </div>
      <div className="w-1/2 flex items-center justify-end pr-4">
        {currentIndex < textSequences.length && (
          <motion.p
            className={`${animate ? "text-animation" : ""} text-3xl`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {textSequences[currentIndex].text}
          </motion.p>
        )}
      </div>
      <div className="w-1/2 flex justify-center relative">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className="absolute w-1/4"
            initial={image.initial}
            animate={
              stacked ? { x: 0, y: 0, rotate: 0, zIndex: index } : image.initial
            }
            transition={{ duration: 1, delay: image.delay }}
            style={{ zIndex: images.length - index }}
          />
        ))}
        {stacked && (
          <motion.img
            src={dogCenter}
            alt="Center Dog"
            className="absolute"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.5 }} // Adjust the scale to make it larger
            transition={{ duration: 1 }}
            style={{ zIndex: images.length, width: "50%", height: "50%" }} // Adjust width and height if necessary
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
