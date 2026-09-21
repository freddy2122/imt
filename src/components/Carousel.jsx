import { useEffect, useRef, useState } from "react";
import { slides } from "../data/slides";
import "./Carousel.css";

const AUTOPLAY_MS = 6000;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="white">
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setIndex(i);
    timerRef.current = setInterval(() => {
      setIndex((cur) => (cur + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  return (
    <section className="carousel">
      <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.title} className="carousel__slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="carousel__container">
              <div className="carousel__badge">{slide.badge}</div>
              <div className="carousel__card">
                <h2>{slide.title}</h2>
                <a className="carousel__arrow" href={slide.href} aria-label={slide.title}>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            className={`carousel__dot ${i === index ? "is-selected" : ""}`}
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
