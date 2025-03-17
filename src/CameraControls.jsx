import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";


// Variables globales para almacenar referencias
let cameraRef = null;
let cameraBallRef = null;
let animating = false;

export default function CameraControls({ controls, orbitControls, parallax}) {
  const { camera } = useThree();
  const CameraBall = useRef();

  // Asignamos valores a las variables globales
  useEffect(() => {
    cameraRef = camera; // Assign cameraRef safely
    cameraBallRef = CameraBall;
    
  }, [camera]); // This ensures it only updates when `camera` changes
  // addParallax()
  // Posicionamiento de la cámara
  camera.position.y = controls.PositionY > -200 ? controls.PositionY : 15;
  camera.position.x = controls.PositionX > -200 ? controls.PositionX : 200;
  camera.position.z = controls.PositionZ > -200 ? controls.PositionZ : 150;

  useFrame(() => {
    if (CameraBall.current) {
      camera.lookAt(CameraBall.current.position);
    }
  });
  //
  return (
    <>

      <mesh
        ref={CameraBall}
        castShadow
        position={[-20, 15, 0]}
        onClick={() => console.log(CameraBall.current.position)}
      >
        <sphereGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}

// Funciones externas para manipular la cámara
export function cameraToShaders() {
  if (cameraBallRef?.current && cameraRef) {
    gsap.to(cameraBallRef.current.position, {
      x: -150,
      z: 35,
      duration: 2
    });
    gsap.to(cameraRef.position, {
      x: -70,
      z: 20,
      duration: 2
    });
  }
}

export function cameraIntro() {
  animating = true;
  if (cameraRef) {
    gsap.to(cameraRef.position, {
      x: 10,
      z: 100,
      duration: 3,
      onComplete:()=>{
        console.log(cameraRef.position);
        animating= false
      }
    });
    gsap.to(cameraBallRef.current.position, {
      x: -20,
      z: 15,
      duration: 2
    });
  }
}

function addParallax(){
  // const [mouse, setMouse] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
      
  //     setMouse({
  //       x: (event.clientX / window.innerWidth - 0.5) * 2, // Normaliza entre -1 y 1
  //       y: -(event.clientY / window.innerHeight - 0.5) * 2,
  //     });
  //     if(!animating){
  //       // cameraRef.position.x += 1/mouse.x * 10
  //       // cameraRef.position.y += 1/mouse.y * 10
  //     }
      

      
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, );
  // // useFrame(() => {
  // //   console.log(mouse);
    
  // // })
}

