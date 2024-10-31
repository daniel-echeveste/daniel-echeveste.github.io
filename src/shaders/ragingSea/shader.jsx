// CustomShaderMaterial.js
import * as THREE from "three";
import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Sky } from '@react-three/drei'
import { useMemo, useState, useRef,} from 'react'
import { useFrame, extend } from '@react-three/fiber'
import testVertexShader from './vertex.glsl'
import testFragmentShader from './fragment.glsl'
import { useControls } from "leva";


export default function ragingSea() {
    const mesh = useRef()

    const controls = useControls({
        uDepthColor:'#186691',
        uSurfaceColor:'#9bd8ff',
        uBigWavesElevation:
        {
            value: 0.2,
            min: 0,
            max: 1,
            step:0.1
        },
        uBigWavesFrequency:
        {
            value:new THREE.Vector2(4, 1.2),
        },
        uBigWavesSpeed:
        {
            value:0.8,
            min: 0,
            max: 10,
            step:0.1
        },
        uColorOffset: 0.8,
        uColorMultiplier: 5.0,
        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 3 },
    })
   console.log(controls);
   
    useFrame((state, delta) => {
        shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    })
    const textureLoader = new THREE.TextureLoader()
    const flagTexture = textureLoader.load('/textures/can-flag.jpg')
    // const CustomShaderMaterial = shaderMaterial(
    //     { uFrequency: new THREE.Vector2(20,10) ,
    //     uTime:  0 ,
    //     uColor:  new THREE.Color('orange') ,
    //     uTexture: flagTexture } , // uniforms
    //     testVertexShader,
    //     testFragmentShader
    //   );
    const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        side: THREE.DoubleSide,
        uniforms:
        {
            uFrequency: { value: new THREE.Vector2(10, 7) },
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('orange') },
            uTexture: { value: flagTexture },
            uBigWavesElevation: {value: controls.uBigWavesElevation},
            uBigWavesFrequency: {value: controls.uBigWavesFrequency},
            uBigWavesSpeed: {value: controls.uBigWavesSpeed},
            uDepthColor: {value: new THREE.Color(controls.uDepthColor)},
            uSurfaceColor: {value: new THREE.Color(controls.uSurfaceColor)},
            uColorOffset: {value:0.25},
            uColorMultiplier: {value:2.0},
            uSmallWavesElevation: {value:controls.uSmallWavesElevation },
            uSmallWavesFrequency: { value:controls.uSmallWavesFrequency  },
            uSmallWavesSpeed: {  value:controls.uSmallWavesSpeed},
            uSmallIterations: { value:controls.uSmallIterations },
        }
    })
    const geometry = new THREE.PlaneGeometry(2, 2, 500, 500)

    // const count = geometry.attributes.position.count
    // const randoms = new Float32Array(count) 
    // for (let i = 0; i < count; i++) {
    //     randoms[i] = Math.random()
    // }

    // geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    extend({ shaderMaterial });

    return <>
        {/* <Sky  ></Sky> */}
        <mesh
            geometry={geometry}
            material={shaderMaterial}
            useRef={mesh}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -0.6, 2]}
            scale={new THREE.Vector3(4, 3, 1)} 
>
        </mesh>
    </>
}


