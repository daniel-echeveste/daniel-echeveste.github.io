import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

export default function PalmTrees(props) {
  const { scene } = useGLTF("models/palmtrees/low-poly_beach_palm.glb");

  // Clonamos la escena para que cada PalmTrees sea independiente
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  return <primitive object={clonedScene} castShadow receiveShadow {...props} />;
}

useGLTF.preload("models/palmtrees/low-poly_beach_palm.glb");