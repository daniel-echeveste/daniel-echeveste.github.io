import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { Float } from '@react-three/drei'
import { SphereGeometry, } from 'three'
export default function AppAframe() {
   
    return (
        <>
            <a-scene real-world-meshing cursor="rayOrigin:xrselect;" raycaster="objects: [mixin=mouseover]" >
                <a-assets>
                    <a-asset-item id="burger" src="/hamburger.glb"></a-asset-item>
                    <a-asset-item id="bot" src="/puter_bot.glb"></a-asset-item>
                </a-assets>

                {/* <a-box position="-3 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box> */}
                <a-entity position="0 1.25 -2" gltf-model="#burger" src="#burger" scale="0.1 0.1 0.1"></a-entity>
                <a-entity position="0 5 -4" gltf-model="#bot" src="#bot" ></a-entity>

                {/* <a-sphere position="0 1.25 -5" radius="1.25" color="#ff00ff"></a-sphere> */}
                <a-cylinder position="3 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                <a-plane position="0 0 -4" rotation="-90 0 0" width="10" height="10" color="#7BC8A4"></a-plane>
                <a-sky color="#ECECCC"></a-sky>
            </a-scene>
        </>
    )
}