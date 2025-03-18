// camera/CameraParallax.jsx
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function CameraParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const initialPosition = useRef([camera.position.x, camera.position.y, camera.position.z]); // Default camera position from your Canvas

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates to -1 to 1 range
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update camera position on each frame
  useFrame(() => {
    // Calculate target position with parallax effect
    const parallaxStrength = 5; // Adjust this value to control parallax intensity
    const targetX = initialPosition.current[0] + mouse.current.x * parallaxStrength;
    const targetY = initialPosition.current[1] + mouse.current.y * parallaxStrength;
    const targetZ = initialPosition.current[2];

    // Smoothly interpolate camera position
    camera.position.lerp(
      {
        x: targetX,
        y: targetY,
        z: targetZ,
      },
      0.05 // Adjust this value for smoother/faster movement
    );

    // Optional: Add slight rotation effect
    camera.rotation.x = mouse.current.y * 0.05;
    camera.rotation.y = mouse.current.x * 0.05;
  });

  return null; // This component doesn't render anything visible
}