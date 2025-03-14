// import { useKeyboardControls } from '@react-three/drei'
// import useGame from './stores/useGame.jsx'
// import { useEffect, useRef } from 'react'
// import { addEffect } from '@react-three/fiber'

import Menu from './HtmlElements';
import {Buttons} from './HtmlElements';

import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Html, } from '@react-three/drei'
export default function Interface() {
    return <>
        <Html 
        center
        >
           <Buttons></Buttons>
        </Html>
    </>
}