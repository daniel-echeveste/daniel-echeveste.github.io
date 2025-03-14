import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";

// Variables globales para almacenar referencias
let cameraRef = null;
let cameraBallRef = null;

export default function CameraControls({ controls }) {
  const { camera } = useThree();
  const CameraBall = useRef();

  // Asignamos valores a las variables globales
  cameraRef = camera;
  cameraBallRef = CameraBall;

  // Posicionamiento de la cámara
  camera.position.y = controls.PositionY > -200 ? controls.PositionY : 15;
  camera.position.x = controls.PositionX > -200 ? controls.PositionX : 200;
  camera.position.z = controls.PositionZ > -200 ? controls.PositionZ : 150;

  useFrame(() => {
    if (CameraBall.current) {
      camera.lookAt(CameraBall.current.position);
    }
  });

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
  if (cameraRef) {
    gsap.to(cameraRef.position, {
      x: 10,
      z: 100,
      duration: 3
    });
  }
}
