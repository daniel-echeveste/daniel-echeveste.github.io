import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";

// Global references
let cameraRef = null;
let cameraBallRef = null;
let animating = false;
let initialPosition = null; // Will be initialized as a ref in CameraControls

export default function CameraControls({ controls, orbitControls, parallax }) {
  const { camera } = useThree();
  const CameraBall = useRef();
  initialPosition = useRef([200, 20, 150]); // Initialize global ref here

  // Assign refs and initialize camera position
  useEffect(() => {
    cameraRef = camera;
    cameraBallRef = CameraBall;
  }, [camera]);

  // Set initial camera position based on controls
  camera.position.y = controls.PositionY > -200 ? controls.PositionY : 15;
  camera.position.x = controls.PositionX > -200 ? controls.PositionX : 200;
  camera.position.z = controls.PositionZ > -200 ? controls.PositionZ : 150;

  // Apply parallax effect
  CameraParallax(initialPosition);

  useFrame(() => {
    if (CameraBall.current) {
      camera.lookAt(CameraBall.current.position);
    }
  });

  return (
    <mesh
      ref={CameraBall}
      castShadow
      visible={false}
      position={[-20, 20, 0]}
      onClick={() => console.log(CameraBall.current.position)}
    >
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

// External camera animation functions
export function cameraToShaders() {
  console.log("camera animated to shaders");

  if (cameraBallRef?.current && cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: -70,
      z: 35,
      duration: 2,
    });
    gsap.to(cameraRef.position, {
      x: -70,
      z: 80,
      duration: 2,
      onComplete: () => {
        initialPosition.current = [
          cameraRef.position.x,
          cameraRef.position.y,
          cameraRef.position.z,
        ];
      },
    });
  }
}
export function cameraIntoShaders() {
  console.log("camera animated INto shaders");

  if (cameraBallRef?.current && cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: -70,
      z: 0,

      duration: 2,
    });
    gsap.to(cameraRef.position, {
      x: -70,
      z: 10,

      duration: 2,
      onComplete: () => {
        initialPosition.current = [
          cameraRef.position.x,
          cameraRef.position.y,
          cameraRef.position.z,
        ];
      },
    });
  }
}
export function cameraShaders() {
  if (cameraBallRef?.current && cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: 0,
      z: -8,
      duration: 2,
    });
    gsap.to(cameraRef.position, {
      x: 0,
      z: 0,
      duration: 2,
      onComplete: () => {
        initialPosition.current = [
          cameraRef.position.x,
          cameraRef.position.y,
          cameraRef.position.z,
        ];
      },
    });
  }
}
export function cameraIntro(duration = 3) {
  console.log("camera animated to intro");

  animating = true;
  if (cameraRef && initialPosition) {
    gsap.to(cameraRef.position, {
      x: 10,
      z: 100,
      duration: duration,
      onComplete: () => {
        console.log(cameraRef.position);
        initialPosition.current = [
          cameraRef.position.x,
          cameraRef.position.y,
          cameraRef.position.z,
        ];
        animating = false;
      },
    });
    gsap.to(cameraBallRef.current.position, {
      x: -10,
      z: 15,
      duration: 2,
    });
  }
}

export function cameraIntoIsland(duration = 3) {
  console.log("camera animated to into Island");

  animating = true;
  if (cameraRef && initialPosition) {
    gsap.to(cameraRef.position, {
      x: 10,
      z: 60,
      duration: duration,
      onComplete: () => {
        console.log(cameraRef.position);
        initialPosition.current = [
          cameraRef.position.x,
          cameraRef.position.y,
          cameraRef.position.z,
        ];
        animating = false;
      },
    });
    gsap.to(cameraBallRef.current.position, {
      x: 10,
      z: 0,
      duration: 2,
    });
  }
}
export function cameraIntoProjects(duration = 5) {
  console.log("camera animated to into Island");

  animating = true;
  if (cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: -80,
      z: 10,
      duration: 2,
      onComplete: () => {
        console.log(cameraBallRef.current.position);
      },
    });
    gsap.to(cameraRef.position, {
      z: 20,
      duration: duration,
      onComplete: () => {
        gsap.to(cameraRef.position, {
          x: -70,
          duration: duration,
          onComplete: () => {
            gsap.to(cameraBallRef.current.position, {
              x: -70,
              z: -10,
              duration: 2,
              onComplete: () => {
                console.log(cameraBallRef.current.position);
              },
            });
            console.log(cameraRef.position);
            initialPosition.current = [
              cameraRef.position.x,
              cameraRef.position.y,
              cameraRef.position.z,
            ];
            animating = false;
          },
        });
      },
    });
  }
}

export function lookDown() {
  animating = true;
  if (cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: -20,
      z: 15,
      y: -1000,
      duration: 2,
    });
  }
}
export function lookUp() {
  animating = true;
  if (cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: -20,
      z: 15,
      y: 1000,
      duration: 2,
    });
  }
}
export function lookBack() {
  animating = true;
  if (cameraRef && initialPosition) {
    gsap.to(cameraBallRef.current.position, {
      x: 0,
      z: 10015,
      y: 0,
      duration: 2,
    });
  }
}

// Parallax function
function CameraParallax(initialPositionRef) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update camera position with parallax
  useFrame(() => {
    if (!animating && initialPositionRef.current) {
      const parallaxStrength = 5;
      const targetX =
        initialPositionRef.current[0] - mouse.current.x * parallaxStrength;
      const targetY =
        initialPositionRef.current[1] - mouse.current.y * parallaxStrength;
      const targetZ = initialPositionRef.current[2];

      camera.position.lerp({ x: targetX, y: targetY, z: targetZ }, 0.05);

      camera.rotation.x = mouse.current.y * 0.05;
      camera.rotation.y = mouse.current.x * 0.05;
    }
  });

  return null;
}
