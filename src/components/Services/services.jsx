/** @format */

import { useState } from "react";
import "./services.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  AOS.init();
  const data = [
    {
      class: "s-c-item fir",
      text: "MERN طراحی پروژه",
    },
    {
      class: "s-c-item sec",
      text: "نویسی API",
    },
    {
      class: "s-c-item thi",
      text: "REACT طراحی قالب",
    },
    {
      class: "s-c-item for",
      text: "پشتیبانی سایت",
    },
  ];
  return (
    <div id="service" className='services-section'>
      <div className='services-title'>
        <h2 data-aos='fade-up'>خدمات</h2>
      </div>
      <div className='services-container'>
        {data.map((item, i) => {
          return (
            <div
              key={i}
              data-aos='fade-up'
              data-aos-duration='1000'
              onMouseMove={(e) => {
                e.target.style.backgroundPositionX =
                  e.nativeEvent.offsetX / 20 - 110 + "px";
                e.target.style.backgroundPositionY =
                  e.nativeEvent.offsetY / 20 - 10 + "px";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundPosition = "center";
              }}
              className={item.class}>
              <div className="border"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
