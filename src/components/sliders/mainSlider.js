import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import SliderOne from "../sliders/sliderOne"
import SliderTwo from "../sliders/sliderTwo"
import SliderThree from "../sliders/sliderThree"
import SliderFour from "../sliders/sliderFour"
import SliderFive from "../sliders/sliderFive"

const MainSlider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        autoPlay
        transitionTime={500}
        interval={5000}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <SliderOne />
        </div>
        <div>
          <SliderTwo />
        </div>
        <div>
          <SliderThree />
        </div>
        <div>
          <SliderFour />
        </div>
        <div>
          <SliderFive />
        </div>
      </Carousel>
    </div>
  )
}

export default MainSlider
