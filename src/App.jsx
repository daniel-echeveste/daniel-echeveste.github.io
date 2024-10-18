import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'
import { SphereGeometry, } from 'three'
import { OrbitControls, Html,Float, Stage, } from '@react-three/drei'
import AppAframe from './AppAframe.jsx'
import AppXR from './AppXR.jsx'

import ReactDOM from 'react-dom/client'


export default function App() {
  const [XR, setIsXR] = useState(false)
  const [Aframe, setIsAframe] = useState(false);
  const enterAframe = ()=>{
    setIsAframe(!Aframe);
  }
  const enterXR = ()=>{
    setIsXR(!XR);
  }
  
  
  return (
    <>
            {!Aframe && <button onClick={enterXR} className='enter-xr-button'>Enter VR</button>}
            {XR && <AppXR></AppXR>} 
            {!XR && <button onClick={enterAframe} className='enter-vr-button'>Enter AR</button> }
            {Aframe && <AppAframe></AppAframe>}
    </>
  )
}