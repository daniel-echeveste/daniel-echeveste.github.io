import "./styles/style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useEffect, useState } from "react";
import WorkingPlaceholder from "./WorkingPlaceholder";
import { useControls, folder, Leva } from "leva";
import Menu from "./HtmlElements.jsx";
import Portfolio from "./BasicPortfolio.jsx";
import WorkingPlaceholder2 from "./WorkingPlaceholder2.jsx";
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
            shadows
            camera={{
              fov: 60,
              near: 0.1,
              far: 500,
              position: [0, 0, 4],
            }}
          >
            <Experience />
          </Canvas>
          <Menu />
          <Leva collapsed />
        </>
      )}
      {portfolio && (
        <>
          <Portfolio></Portfolio>
        </>
      )}
      {!develop && !portfolio && <WorkingPlaceholder />}
      {/* {!develop && !portfolio && <WorkingPlaceholder2 />} */}
    </>
  );
}
