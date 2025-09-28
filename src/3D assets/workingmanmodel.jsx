import { useGLTF} from "@react-three/drei"


export default function Island1(args){
    const model = useGLTF('models/working-man.glb')
    console.log(args);
    model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      // Opcional: garantiza sombras más suaves
      child.material.shadowSide = 2; // THREE.BackSide
    }
  });
    return <primitive object={model.scene} castShadow  receiveShadow  {...args}/>
}
useGLTF.preload('models/working-man.glb')