import "./styles/style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useEffect, useState} from "react";
import WorkingPlaceholder from "./WorkingPlaceholder";
import {  Leva } from "leva";
import Menu from "./HtmlElements.jsx";
import NavBar from "./NavBar.jsx"
import Portfolio from "./BasicPortfolio.jsx";


export default function App() {
  const [develop, setDevelop] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#develop") {
      setDevelop(true);
    } else if (window.location.hash === "#portfolio") {
      setPortfolio(true);
    }
  }, []);
  return (
    <>
      {develop && (
        <>
          <Canvas 
          className="transition-all duration-600 ease-linear"
          id="canvas"
            shadows
            camera={{
              fov: 60,
              near: 0.1,
              far: 500,
              position: [200, 15, 150],
            }}
          >
            <Experience />
          </Canvas>
          {/* <Menu /> */}
          <NavBar></NavBar>
          <Leva collapsed />
          <div className=" scroll-auto">
            <Portfolio></Portfolio>
          </div>
        </>
      )}
      {portfolio && (
        <>
          <div className=" scroll-auto">
            <Portfolio></Portfolio>
          </div>
        </>
      )}
      {!develop && !portfolio && <WorkingPlaceholder />}
      {/* {!develop && !portfolio && <WorkingPlaceholder2 />} */}
    </>
  );
}
