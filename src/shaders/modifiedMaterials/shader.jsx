// CustomShaderMaterial.js
import * as THREE from "three";
import {
  OrbitControls,
  Float,
  Text,
  useGLTF,
  shaderMaterial,
  Sky,
  Environment,
} from "@react-three/drei";

import { useMemo, useState, useRef, Suspense } from "react";
import { useFrame, extend } from "@react-three/fiber";
import Placeholder from "../../Placeholder";
import HeadModel from "./headModel";
// import testVertexShader from './vertex.glsl'
// import testFragmentShader from './fragment.glsl'
import { useControls } from "leva";

export default function ModifiedMaterial() {
  return (
    <>
        
      <Environment
        files={"textures/environmentMaps/red_wall_4k.hdr"}
        background
      ></Environment>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <HeadModel></HeadModel>
      </Suspense>

      <mesh></mesh>
    </>
  );
}
