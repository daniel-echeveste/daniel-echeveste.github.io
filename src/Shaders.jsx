import { OrbitControls, Float, Text, useGLTF, shaderMaterial, } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { useFrame,  } from '@react-three/fiber'
import CustomShaderMaterial from './shaders/test/shader'


export default function Shaders() {
    const click = () => {
    }
   
    return <>
        <OrbitControls></OrbitControls>
        <CustomShaderMaterial></CustomShaderMaterial>

        {/* <mesh receiveShadow scale={2} onClick={click}>
            <planeGeometry args={[3,1.5, 1]} />
            <CustomShaderMaterial></CustomShaderMaterial>
        </mesh> */}

    </>
}