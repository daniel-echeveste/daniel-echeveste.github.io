import { Float, Text, Html } from "@react-three/drei";
import * as THREE from "three";

export default function WorkingPlaceholder() {
  return (
    <>
      <group
        onClick={() => {
          window.location.hash = "#develop";
          window.location.reload(); // Recarga la página para aplicar el cambio
        }}
      >
        <Float speed={0.3}>
          <Text
            font="/bebas-neue-v9-latin-regular.woff"
            scale={0.3}
            lineHeight={0.75}
            textAlign="right"
            position={[0.75, 1.65, -1]}
          >
            I am currently working on this, if you want to see the progress
            click
            <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide} />
          </Text>
          <Text
            font="/bebas-neue-v9-latin-regular.woff"
            scale={0.3}
            lineHeight={0.75}
            textAlign="right"
            position={[0, 1.2, -1]}
            pointer
            className=" pointer"
            onClick={() => {
              window.location.hash = "#develop";
              window.location.reload(); // Recarga la página para aplicar el cambio
            }}
          >
            HERE
            <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide} />
          </Text>
        </Float>

        <Html center>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <img src="working-on-it.gif" alt="Loading GIF" />
          </div>
        </Html>
      </group>
    </>
  );
}
