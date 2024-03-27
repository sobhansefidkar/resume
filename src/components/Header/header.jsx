/** @format */

import "./header.css";
import Icon from "react-icons-kit";
import { telegram } from "react-icons-kit/fa/telegram";
import { instagram } from "react-icons-kit/fa/instagram";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  Aos.init();
  const txt = "توسعه دهنده وب :)";
  let [plaintxt, setPlaintxt] = useState("");
  let index = 1;
  useEffect(() => {
    const timer = setInterval(() => {
      index++;
      setPlaintxt(txt.slice(0, index));
      if (index == txt.length + 10) {
        index = 1;
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section id='header' className='header-section'>
      <div className='l-header'>
        <div  >
          <h1>سلام , من سبحانم</h1>
          <p>{plaintxt}</p>
          <div>
            <span className='cumunities-icon'>
              <Icon size={25} icon={telegram}></Icon>
            </span>
            <span className='cumunities-icon'>
              <Icon size={25} icon={instagram}></Icon>
            </span>
          </div>
        </div>
      </div>
      <div className='r-header'>
        <div>
          <div>
            <img
              data-aos='fade-left'
              data-aos-duration='2000'
              src='../../images/face.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
