import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Environment } from "@react-three/drei";

export default function CameraRig() {
  const { camera, viewport } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2, // Normalize entre -1 y 1
        y: -(event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.x * viewport.width * 0.1 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * viewport.height * 0.1 - camera.position.y) * 0.05;
  });
  console.log(camera.position);
  
  return <></>;
}
