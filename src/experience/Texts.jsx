import ControlsManager from "../LevaControls";
import {
  OrbitControls,
  Float,
  Text,
  useGLTF,
  shaderMaterial,
  Html,
  Text3D,
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

  const shaderMaterial = ragingSeaMaterial();

  return (
    <>
      <Float>
        <Text3D
          font="fonts/roboto/roboto.json"
          // font="fonts/cloud1/Alphasmoke-OOX6.json"
          scale={8}
          //   lineHeight={0.75}
          textAlign="center"
          position={[-80, 40.65, 0]}
          // material={shaderMaterial}
        >
          Daniel Echeveste Developer
          <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide} />
        </Text3D>
      </Float>
    </>
  );
}

