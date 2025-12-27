import { useState, useEffect } from "react";
import "./slider.css";


export default function Slider({ images, size = "large",  interval = 3500   }) {
    
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(next, interval);

    return () => clearInterval(autoSlide);
  }, [index, interval]);

  return (
    <div className={`slider-container ${size}`}>
      {/* BOTONES LATERALES */}
      <button className="arrow left" onClick={prev}>❮</button>

      <img src={images[index]} alt="slide" className="slider-img" />

      <button className="arrow right" onClick={next}>❯</button>
    </div>
    
  );
}


