import React, { useState } from 'react'
import { Carousel } from "@material-tailwind/react";
import { TailwindProvider } from "@material-tailwind/react";

function SliderComponent() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
        "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
        "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
        "https://wallpapers.com/images/featured/2560x1080-background-erp96ar25vyud5l0.jpg",
      ];
  return (
    <div>
       <TailwindProvider>
      <Carousel value={activeIndex} onChange={(index) => setActiveIndex(index)}>
        {images.map((image, index) => (
          <img src={image} key={index} alt={{index}}/>
        ))}
      </Carousel>
    </TailwindProvider>
    </div>
  )
}

export default SliderComponent
