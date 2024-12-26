import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function coffeeMugModel(args){
    const model = useGLTF('models/coffeeMug/bakedModel.glb')
    return <primitive object={model.scene} castShadow position-z={-4} scale={1}/>
}
useGLTF.preload('models/LeePerrySmith/LeePerrySmith.glb')