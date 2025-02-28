import { Perf } from 'r3f-perf'
import { useEffect, useState } from 'react'
import Shaders from './Shaders'
import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Html, Sky } from '@react-three/drei'
import * as THREE from 'three'

export default function OurSky() {

    
    return (
        <>
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  />
        </>
    )
}