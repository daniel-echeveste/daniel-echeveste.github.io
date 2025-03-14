import "./styles/style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useEffect, useState } from "react";
import WorkingPlaceholder from "./WorkingPlaceholder";
import { useControls, folder, Leva } from "leva";
import Menu from "./HtmlElements.jsx";
export default function App() {
  const [develop, setDevelop] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#develop") {
      setDevelop(true);
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
          <Leva 
          collapsed
          />
        </>
      )}
     
      {!develop && <WorkingPlaceholder />}
    </>
  );
}
