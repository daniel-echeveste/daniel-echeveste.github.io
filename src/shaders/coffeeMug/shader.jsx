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
import { useFrame, extend, } from "@react-three/fiber";
import Placeholder from "../../Placeholder";
import CoffeeModel from "./coffeeMug";
// import testVertexShader from './vertex.glsl'
// import testFragmentShader from './fragment.glsl'
import { useControls } from "leva";

export default function CoffeeMug() {
  return (
    <>
    <ambientLight intensity={0.5}></ambientLight>
   
    <directionalLight castShadow position={[4, 2, - 2.25]} intensity={10}></directionalLight>
      
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <CoffeeModel ></CoffeeModel>
      </Suspense>
      
    </>
  );
}