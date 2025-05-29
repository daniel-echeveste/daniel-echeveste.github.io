import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import * as THREE from "three"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";
import { text } from "framer-motion/client";

export default function Earth(args) {
    
   
    document.body.style.backgroundColor = "#000011"
   const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
   }

    const controls = useControls({

    })

    const textureLoader = new THREE.TextureLoader()
    const pictureTexture = textureLoader.load('/textures/imgs/picture-1.png')

    const particlesMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms:
        {
            uTime: {value: 0},
            uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width, sizes.height)),
            uPictureTexture: new THREE.Uniform(pictureTexture)
        }
    })

    useFrame(() => {
        particlesMaterial.uniforms.uTime.value += 0.01;
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        particlesMaterial.uniforms.uResolution.value.set(sizes.width, sizes.height);
    })

    return (
        <>
           
            <points material={particlesMaterial}>
                <planeGeometry args={[10,10,128, 128]} />
               
            </points>

        </>
    )
}

