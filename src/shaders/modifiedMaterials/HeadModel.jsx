import { useGLTF } from "@react-three/drei"

export default function HeadModel(){
    const model = useGLTF('models/LeePerrySmith/LeePerrySmith.glb')
    console.log('pepe');
    
    return <primitive object={model.scene} scale={1}/>
}
useGLTF.preload('models/LeePerrySmith/LeePerrySmith.glb')