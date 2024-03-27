/** @format */

import "./menu.css";
import { useState } from "react";
import Icon from "react-icons-kit";
import { reorder } from "react-icons-kit/fa/reorder";
import { home } from "react-icons-kit/fa/home"
import { handGrabO } from "react-icons-kit/fa/handGrabO"
import { close } from "react-icons-kit/fa/close"
import { profile } from "react-icons-kit/icomoon/profile"
import { server } from "react-icons-kit/fa/server"
import { commentO } from "react-icons-kit/fa/commentO"

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const handleTouch = (e) => {
    let x = Math.min(Math.max(e.touches[0].clientX, 0), window.innerWidth);
    let y = Math.min(Math.max(e.touches[0].clientY, 0), window.innerHeight);
    setX(x);
    setY(y);
  };
  const handleleave = (e) => {
    let x = Math.min(Math.max(e.clientX, 0), window.innerWidth);
    let y = Math.min(Math.max(e.clientY, 0), window.innerHeight);
    setX(x);
    setY(y);
  };
  return (
    <div
      className='menu'
      draggable
      style={{ left: `${x - 20}px`, top: `${y - 20}px` }}
      onTouchMove={handleTouch}
      onDragEnd={handleleave}>
      <Icon size={25} icon={reorder} onClick={() => setOpenMenu(true)}></Icon>
      {openMenu &&
      <div className="menu-container">
        <a href="#skills" className="menu-item">
          <Icon className={"menu-txt"} icon={handGrabO}></Icon>
          <span  className={"menu-txt"}>مهارت ها</span >
        </a>
        <a href="#header" className="menu-item">
          <Icon className={"menu-txt"} icon={home}></Icon>
          <span className={"menu-txt"}>صفحه اصلی</span>
        </a>
        <div className="menu-item close" onClick={() => setOpenMenu(false)}>
          <Icon className={"menu-txt"} icon={close}></Icon>
          <span className={"menu-txt"}>بستن</span>
        </div>
        <a href="#comment" className="menu-item">
          <Icon className={"menu-txt"} icon={commentO}></Icon>
          <span className={"menu-txt"}>نظرات</span>
        </a>
        <a href="#resume" className="menu-item">
          <Icon className={"menu-txt"} icon={profile}></Icon>
          <span className={"menu-txt"}>رزومه ها</span>
        </a>
        <a href="#service" className="menu-item">
          <Icon className={"menu-txt"} icon={server}></Icon>
          <span className={"menu-txt"}>خدمات</span>
        </a>
      </div>
      }
    </div>
  );
}

export default Menu;
