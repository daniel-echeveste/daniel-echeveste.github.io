import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Placeholder from "./Placeholder.jsx";
import WorkingManModel from "./workingmanmodel.jsx";

export default function WebglPlaceholder({toggleWebGL}) {
  const model = useGLTF("models/working-man.glb");
  return (
    <>
      <p
       onClick={ ()=>{toggleWebGL(false)} }
       className="text-xl md:text-2xl mb-6 font-bold text-center  text-amber-50 absolute top-40 w-full cursor-pointer z-20 "
       >
        WORK IN PROGRESS | 3D Portfolio Coming Soon!
      </p>
      <Canvas
        className="w-full h-full"
        shadows
        camera={{
          fov: 60,
          near: 0.1,
          far: 500,
          position: [0, 0, 18],
        }}
      >
        <OrbitControls />
        {/* <directionalLight castShadow position={[lights.directionalPositionX, lights.directionalPositionY, lights.directionalPositionZ]} intensity={sunset.intensity} color={sunset.color}/> */}
        <ambientLight intensity={0.8} color={"#510077"} />
        <pointLight position={[2, 2, 4]} intensity={50} color={"#fcf3c8"} />
        {/* <spotLight position={[2, 2, 4]} angle={0.3} /> */}
        {/* light helper  */}
        {/* <mesh position={[2, 2, 4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <sphereGeometry args={[0.4, 64, 64]}></sphereGeometry>
          <meshBasicMaterial side={2} color="white" ></meshBasicMaterial>
         </mesh> */}

        <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
          <WorkingManModel position={[0, -5, 0]}></WorkingManModel>
        </Suspense>
      </Canvas>
    </>
  );
}
