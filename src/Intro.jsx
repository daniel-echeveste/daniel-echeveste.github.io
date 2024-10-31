import { OrbitControls, Float, Text, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'



export default function Intro() {
    const position = [0, 0, 0]
    const cube = useRef()
    const ball = useRef()
    const floor = useRef()
    const cubeJump = () => {
        console.log(cube.current)
        cube.current.applyImpulse({ x: 0, y: 7, z: 0 })
        // cube.current.applyTorqueImpulse({x:2, y:1,z:3})
    }
    const shadersClick = () => {
        floor.current.setBodyType("dymanic")
        console.log(floor.current.isFixed());

    }
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

    const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
    const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' })
    const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered' })
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })
    return <>


        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <Physics
            gravity={[0, -9.08, 0]}
            debug>

            <RigidBody type='fixed'>
                <Float >
                    <Text
                        font="/bebas-neue-v9-latin-regular.woff"
                        scale={0.5}
                        lineHeight={0.75}
                        textAlign="right"
                        position={[0.75, 1.65, -1]}
                        rotation-y={- 0.25}
                    >
                        SHADERS PLAYGROUND
                        <meshBasicMaterial toneMapped={false} />
                    </Text>
                </Float>
            </RigidBody>
            <RigidBody colliders="ball">
                <mesh castShadow position={[0, 6, 0]} onClick={shadersClick}>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />

                </mesh>
            </RigidBody>

            <RigidBody ref={cube}
                friction={0.7}
                restitution={0}>
                <mesh castShadow position={[2, 2, 0]} onClick={cubeJump}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>

            </RigidBody>

            {/* <RigidBody colliders='trimesh'>
                <mesh castShadow position={[0, 2, 0]}>
                    <torusGeometry args={[1,0.5,16,32]}/>
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody> */}

            <RigidBody ref={floor} type='fixed' restitution={0} friction={0.7}>
                <mesh receiveShadow position-y={- 1.25} >
                    <boxGeometry args={[10, 0.5, 10]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>

        </Physics>


    </>
}