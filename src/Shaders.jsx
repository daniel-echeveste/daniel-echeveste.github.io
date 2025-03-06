import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Html, } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { useFrame, } from '@react-three/fiber'
import Flag from './shaders/test/shader'
import PatternsShaderMaterial from './shaders/patterns/shader'
import RagingSea from './shaders/ragingSea/shader'
import Galaxy from './shaders/galaxy/shader'
import ModifiedMaterials from './shaders/modifiedMaterials/shader'
import CoffeeMug from './shaders/coffeeMug/shader'
import HolographicMaterial from './shaders/holographic/shader'
import ArcaneMaterial from './shaders/arcane/shader'


export default function Shaders() {
    const click = () => {
    }

    const [selectedShader, setSelectedShader] = useState('arcane2')

    const handleShaderChange = (event) => {
        setSelectedShader(event.target.value)
    }

    return <>
        
        <Html 
        center
        >
            <div style={{ position: 'absolute', top: -450, left: 0, zIndex: 1 } }>
                <select value={selectedShader} onChange={handleShaderChange}>
                    <option value="flag">Flag Shader</option>
                    <option value="ragingSea">Raging Sea Shader</option>
                    <option value="patterns">Patterns Shader</option>
                    <option value="galaxy">Galaxy Shader</option>
                    <option value="modifiedMaterials">Modified Materials</option>
                    <option value="coffeeMug">Coffee Mug </option>
                    <option value="holographic">Holographic</option>
                    <option value="arcane">arcane</option>
                </select>
            </div>
        </Html>
        <Float>
            <Text
                font="/bebas-neue-v9-latin-regular.woff"
                scale={0.5}
                lineHeight={0.75}
                textAlign="right"
                position={[0.75, 1.65, -1]}
            >
                SHADERS PLAYGROUND
                <meshBasicMaterial toneMapped={false} side={THREE.DoubleSide}/>
            </Text>
        </Float >

        {selectedShader === 'flag' && <Flag />}
        {selectedShader === 'ragingSea' && <RagingSea />}
        {selectedShader === 'patterns' && <PatternsShaderMaterial />}
        {selectedShader === 'galaxy' && <Galaxy />}
        {selectedShader === 'modifiedMaterials' && <ModifiedMaterials />}
        {selectedShader === 'coffeeMug' && <CoffeeMug />}
        {selectedShader === 'holographic' && <HolographicMaterial />}
        {selectedShader === 'arcane' && <ArcaneMaterial/>}
    </>
}