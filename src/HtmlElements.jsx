import { cameraToShaders, cameraIntro } from "./camera/CameraControls"; // Asegúrate de usar la ruta correcta
import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
const Menu = () => {
  return (
    <div className="fixed top-0 left-0 p-2 bg-gray-800 text-white rounded-br-2xl">
      <ul className=" inline-flex">
        <li
        onClick={() => {
          cameraIntro();
        }}>
          <a href="#develop" className="block p-2">
            Home
          </a>
        </li>
        <li>
          <a href="#develop" className="block p-2">
            About
          </a>
        </li>
        <li>
          <a href="#develop" className="block p-2">
            Contact
          </a>
        </li>
        <li
         onClick={() => {
          cameraToShaders();
        }}
        >
          <a href="#contact" className="block p-2">
            Projects
          </a>
        </li>
        <li 
         onClick={() => {
          window.location.hash = "#portfolio";
          window.location.reload();
        }}
        >
          <a href="#portfolio" className="block p-2">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};
export function Button({text, styles, funcion}) {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div
      //  style={{ position: 'absolute', top: -450, left: 0, zIndex: 1} }
      className= {` z-10 bg-amber-50 p-2 rounded-full ${styles} ${isActive?'':'hidden'}`}
      onPointerEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "default";
      }}
    >
      <button
        onClick={(event) => {
          console.log(event.target.parentElement);
          cameraIntro();
          funcion();
          // toggleClass()
        }}
      >
        {text}
      </button>
    </div>
  );
}
export function PlaceHolderImage() {  
  return (
    <div className=" cursor-pointer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <img src="./working-on-it.gif" alt="Loading GIF" />
    </div>
  );
}

export default Menu;
