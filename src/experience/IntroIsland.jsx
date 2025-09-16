import Island1 from "../models/Island1";
import PalmTrees from "../models/palmTrees";
import Placeholder from "../models/Placeholder";
import { useState, Suspense } from "react";
import { easing } from "maath";
import gsap from "gsap";
import { cameraToShaders, cameraIntro } from "../camera/CameraControls";
import {
  OrbitControls,
  Float,
  Text,
  useGLTF,
  shaderMaterial,
  Html,
  MeshPortalMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function IntroIsland({ controls }) {
  const island = controls.IslandControls;
  const palm1 = controls.Palm1Controls;
  const palm2 = controls.Palm2Controls;
  const palm3 = controls.Palm3Controls;
  const palm4 = controls.Palm4Controls;
  const palm5 = controls.Palm5Controls;
  const portal = useRef();
  const [portalActive, setPortalActive] = useState(null);
  useFrame((_state, delta) => {
    if (!portal.current) return;
  });

  return (
    <>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Island1
          position={[island.PositionX, island.PositionY, island.PositionZ]}
          scale={island.Scale}
        ></Island1>
      </Suspense>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <PalmTrees
          position={[palm1.PositionX, palm1.PositionY, palm1.PositionZ]}
          rotation-y={Math.PI * Math.random() * 2}
          scale={palm1.Scale}
        ></PalmTrees>
      </Suspense>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <PalmTrees
          position={[palm2.PositionX, palm2.PositionY, palm2.PositionZ]}
          rotation-y={Math.PI * Math.random() * 2}
          scale={palm2.Scale}
        ></PalmTrees>
      </Suspense>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <PalmTrees
          position={[palm3.PositionX, palm3.PositionY, palm3.PositionZ]}
          rotation-y={Math.PI * Math.random() * 2}
          scale={palm3.Scale}
        ></PalmTrees>
      </Suspense>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <PalmTrees
          position={[palm4.PositionX, palm4.PositionY, palm4.PositionZ]}
          rotation-y={Math.PI * Math.random() * 2}
          scale={palm4.Scale}
        ></PalmTrees>
      </Suspense>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <PalmTrees
          position={[palm5.PositionX, palm5.PositionY, palm5.PositionZ]}
          rotation-y={Math.PI * Math.random() * 2}
          scale={palm5.Scale}
        ></PalmTrees>
      </Suspense>

      <mesh
        // castShadow
        position={[-72, 12, 25]}
        onClick={() => {
          console.log("portal is open");
          cameraIntoShaders();
          setPortalActive(true);
          togglePortal(portal, portalActive);
        }}
      >
        <planeGeometry args={[8, 20]} />
        <MeshPortalMaterial ref={portal} blend={portalActive}>
          {/* <Shaders
            portalActive={portalActive}
            setPortalActive={setPortalActive}
            togglePortal = {togglePortal}
            portal={portal}
          ></Shaders> */}
        </MeshPortalMaterial>
      </mesh>
    </>
  );
}
function togglePortal(portal, portalActive) {
  const targetBlend = portalActive ? 0 : 1;
  gsap.to(portal.current, { blend: targetBlend, duration: 0.5 });
}
