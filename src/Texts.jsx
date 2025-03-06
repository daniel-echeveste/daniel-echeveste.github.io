import ControlsManager from './LevaControls'; 
import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Html, } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { useFrame, } from '@react-three/fiber'
import testVertexShader from './shaders/ragingSea/vertex.glsl'
import testFragmentShader from './shaders/ragingSea/fragment.glsl'


export default function IntroText({controls}) {
    
   
    useFrame((state, delta) => {
        shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    })

    const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        side: THREE.DoubleSide,
        uniforms:
        {
            uFrequency: { value: new THREE.Vector2(10, 7) },
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('orange') },
            uBigWavesElevation: {value: 0.2},
            uBigWavesFrequency: {value: new THREE.Vector2(4, 1.2)},
            uBigWavesSpeed: {value: 0.8},
            uDepthColor: {value: new THREE.Color('#e5735e')},
            uSurfaceColor: {value: new THREE.Color('#000000')},
            uColorOffset: {value:0.25},
            uColorMultiplier: {value:2.0},
            uSmallWavesElevation: {value:0.15},
            uSmallWavesFrequency: { value:3  },
            uSmallWavesSpeed: {  value:0.2},
            uSmallIterations: { value:3},
        }
    })

    return (
        <Float>
            <Text
                font="/bebas-neue-v9-latin-regular.woff"
                scale={8}
                lineHeight={0.75}
                textAlign="center"
                position={[150, 20.65, 100]}
            >
               Welcome
                <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}/>
            </Text>
            <Text
                font="/bebas-neue-v9-latin-regular.woff"
                scale={8}
                lineHeight={0.75}
                textAlign="center"
                position={[100, 10.65, 50]}
            >
               To My
                <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}/>
            </Text>
            <Text
                font="/bebas-neue-v9-latin-regular.woff"
                scale={8}
                lineHeight={0.75}
                textAlign="center"
                position={[0, 40.65, 0]}
                material={shaderMaterial}
            >
                Portfolio
                
                {/* <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}/> */}
            </Text>
        </Float >
    );
}

            {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  /> */}
