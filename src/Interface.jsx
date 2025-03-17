// import { useKeyboardControls } from '@react-three/drei'
// import useGame from './stores/useGame.jsx'
// import { useEffect, useRef } from 'react'
// import { addEffect } from '@react-three/fiber'

import Menu from './HtmlElements';
import {Button} from './HtmlElements';

import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Html, } from '@react-three/drei'
export default function Interface() {
    const pepe = ()=>{
        console.log('pepe');
    }
    return <>
        <Html 
        center
        >
           <Button 
            text= "Intro"
            styles="rounded-xl"
            funcion={pepe}
           />
        </Html>
    </>
}