import { OrbitControls, Float, Text, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Shaders from './Shaders'


export default function Experience() {
 
    return <>
        <Shaders></Shaders>
    </>
}