import React, { useState } from "react";

function SliderComp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
    "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
    "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
    "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
  ]; const goToPreviousSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative w-full" id="default-carousel">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out transform ${
              index === activeIndex ? "translate-x-0" : "translate-x-full"
            }`}
            data-carousel-item
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 px-3 py-2 bg-gray-800 bg-opacity-50 rounded-full text-white focus:outline-none"
        onClick={goToPreviousSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 px-3 py-2 bg-gray-800 bg-opacity-50 rounded-full text-white focus:outline-none"
        onClick={goToNextSlide}
      >
        Next
      </button>
      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            } focus:outline-none`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderComp;
