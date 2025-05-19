import ControlsManager from "../LevaControls";
import {
  OrbitControls,
  Float,
  Text,
  useGLTF,
  shaderMaterial,
  Html,
  Text3D
  
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import * as THREE from "three";
import { useMemo, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import ragingSeaMaterial from "../shaders/ragingSea/shaderMaterial";

export default function IntroText({ controls }) {
  useFrame((state, delta) => {
    shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime;
  });

  const shaderMaterial = ragingSeaMaterial()

  return (
    <>
      
      <Float>
        <Text3D
                  font="fonts/roboto/roboto.json"

          // font="fonts/bebas-neue/bebas-neue-v9-latin-regular.woff"
          scale={8}
          lineHeight={0.75}
          textAlign="center"
          position={[150, 20.65, 100]}
        >
          Welcome
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide} />
        </Text3D>
        <Text3D
                  font="fonts/roboto/roboto.json"

          // font="fonts/bebas-neue/bebas-neue-v9-latin-regular.woff"
          scale={8}
          lineHeight={0.75}
          textAlign="center"
          position={[100, 10.65, 50]}
        >
          To My
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide} />
        </Text3D>
        <Text3D
          font="fonts/roboto/roboto.json"
          // font="fonts/cloud1/Alphasmoke-OOX6.json"
          scale={8}
        //   lineHeight={0.75}
        //   textAlign="center"
          position={[0, 40.65, 0]}
          // material={shaderMaterial}
        >
          Portfolio
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}/>
        </Text3D>

      </Float>
    </>
  );
}

{
  /* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  /> */
}
