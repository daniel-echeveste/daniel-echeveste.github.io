

import { useEffect } from "react";
import Menu, { Button } from "./HtmlElements";
import { cameraToShaders, cameraIntro,cameraIntoIsland, cameraIntoProjects } from "../camera/CameraControls"; 
import { Html } from "@react-three/drei";

export default function Interface() {
  useEffect(() => {
     cameraIntro(5);
  }, []);

  return (
    <>
      <Html center>
        <Button 
          text="Intro" 
          styles="rounded-xl" 
          funcion={cameraIntoIsland} 
        />
         <Button 
          text="Projects" 
          styles="rounded-xl ml-32" 
          funcion={cameraIntoProjects} 
        />
      </Html>
      
    </>
  );
}