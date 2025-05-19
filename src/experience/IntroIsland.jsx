import Island1 from  "../models/Island1";
import Placeholder from "../models/Placeholder";
import { useState, Suspense } from "react";
import { easing } from "maath";
import gsap from "gsap";

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
import { cameraIntoShaders } from "../camera/CameraControls";

export default function IntroIsland({ controls }) {
  const island = controls.IslandControls;
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
      <mesh
        // castShadow
        position={[-72, 12, 25]}
        onClick={() => {
          console.log("portal is open");
          cameraIntoShaders();
          setPortalActive(true);
          togglePortal(portal, portalActive)
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
  const targetBlend = portalActive ? 0 : 1
  gsap.to(portal.current, { blend: targetBlend, duration: 0.5});

}
