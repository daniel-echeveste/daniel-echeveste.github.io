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
import CoffeeModel from "./coffeeMug";
import VertexShader from "./vertex.glsl";
import FragmentShader from "./fragment.glsl";
import { useControls } from "leva";

console.log(VertexShader);

export default function CoffeeMug() {
  const smokeGeometry = new THREE.PlaneGeometry(1, 1, 16, 64);
  smokeGeometry.scale(0.75, 3, 0.75);
  const textureLoader = new THREE.TextureLoader()
  const perlinTexture = textureLoader.load('./textures/perlin.png');
  const smokeMaterial = new THREE.ShaderMaterial({
    vertexShader: VertexShader,
    fragmentShader: FragmentShader,
    side: THREE.DoubleSide,
    color: "cyan",
    wireframe: true,
    uniforms:{
      uPerlinTexture:{ value: perlinTexture}
    }
  });

  return (
    <>
      <mesh
        geometry={smokeGeometry}
        material={smokeMaterial}
        // useRef={mesh}
        // rotation={[Math.PI / 2, 0, 0]}
        position={[0, 1, 0]}
        wireframe
        // scale={new THREE.Vector3(4, 3, 1)}
      ></mesh>
      <ambientLight intensity={0.5}></ambientLight>
      <directionalLight
        castShadow
        position={[4, 2, -2.25]}
        intensity={10}
      ></directionalLight>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <CoffeeModel position-z={0} position-y={-1} scale={0.5}></CoffeeModel>
      </Suspense>
    </>
  );
}
