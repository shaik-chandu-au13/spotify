import React, { useEffect } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import defaultCover from "@/assets/default-cover.webp";

const Slider = ({ slides }) => {
  function slideTo(direction) {
    const sliderTrack = document.querySelector(".slider-track");
    const sliderTrackWidth = sliderTrack.scrollWidth;

    if (direction === "right") {
      sliderTrack.scrollBy(sliderTrackWidth / 4, 0);
    } else {
      sliderTrack.scrollBy(-(sliderTrackWidth / 4), 0);
    }
  }

  function updateSliderButtonsVisibility() {
    const sliderTrack = document.querySelector(".slider-track");
    const btnRight = document.querySelector(".btn-right");
    const btnLeft = document.querySelector(".btn-left");

    const minScroll = 0;
    const maxScroll = sliderTrack.scrollWidth;
    const currentScrollPosition = sliderTrack.scrollLeft;
    const sliderTrackWidth = sliderTrack.offsetWidth;

    if (sliderTrackWidth + currentScrollPosition >= maxScroll) {
      btnRight.style.visibility = "hidden";
    } else {
      btnRight.style.visibility = "visible";
    }

    if (currentScrollPosition <= minScroll) {
      btnLeft.style.visibility = "hidden";
    } else {
      btnLeft.style.visibility = "visible";
    }
  }

  useEffect(() => {
    const sliderTrack = document.querySelector(".slider-track");
    updateSliderButtonsVisibility();

    window.addEventListener("resize", updateSliderButtonsVisibility);
    sliderTrack.addEventListener("scroll", updateSliderButtonsVisibility);

    return () => {
      window.removeEventListener("resize", updateSliderButtonsVisibility);
      sliderTrack.removeEventListener("scroll", updateSliderButtonsVisibility);
    };
  }, []);

  return (
    <div className="slider-container">
      <button className="btn-direction btn-left" onClick={() => slideTo("left")}>
        <FontAwesomeIcon icon={faChevronLeft} color={"#000"} />
      </button>

      <ul className="slider-track">
        {slides.map((slide) => (
          <li className="slide" key={slide.id}>
            <img
              className="background-img"
              src={slide?.icons[0]?.url || ""}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultCover;
              }}
              alt={`${slide.name} cover`}
            />
            <span className="slide-text">{slide.name}</span>
          </li>
        ))}
      </ul>

      <button className="btn-direction btn-right" onClick={() => slideTo("right")}>
        <FontAwesomeIcon icon={faChevronRight} color={"#000"} />
      </button>
    </div>
  );
};

export default Slider;
