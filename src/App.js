import Menu from "./components/Menu/menu";
import Header from "./components/Header/header";
import Skills from "./components/Skills/skills";
import Services from "./components/Services/services";
import Resume from "./components/resume/resume";
import Comments from "./components/comments/comments";
import Icon from "react-icons-kit";
import { arrowCircleUp } from "react-icons-kit/fa/arrowCircleUp";
import { useState } from "react"



function App() {
  const [icon, setIcon] = useState(false);
  
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 200) {
      setIcon(true)
    } else {
      setIcon(false)
    }
  })

  return (
    <div className='main-section'>
      <Menu />
      <Header />
      <Skills />
      <Services />
      <Resume />
      <Comments />
      {
        icon &&
        <a href="#header" className="back-to-top">
          <Icon size={25} icon={arrowCircleUp} />
        </a>
      }
    </div>
  );
}

export default App;
