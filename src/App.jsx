import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { SphereGeometry, } from 'three'
import { OrbitControls, Html, Float, Stage, } from '@react-three/drei'
import Experience from './Experience.jsx'
import AppAframe from './AppAframe.jsx'
import AppXR from './AppXR.jsx'
import { createXRStore, XR } from '@react-three/xr'



import ReactDOM from 'react-dom/client'

const store = createXRStore()

export default function App() {
  // const [XR, setIsXR] = useState(false)
  // const [Aframe, setIsAframe] = useState(false);
  // const enterAframe = () => {
  //   setIsAframe(!Aframe);
  // }
  // const enterXR = () => {
  //   setIsXR(!XR);
  // }


  return (
    <>
      {/* <AppXR></AppXR> */}
      {/* {!Aframe && <button onClick={enterXR} className='enter-xr-button'>Enter VR</button>} */}
      {/* {XR && <AppXR></AppXR>} 
            {!XR && <button onClick={enterAframe} className='enter-vr-button'>Enter AR</button> }
            {Aframe && <AppAframe></AppAframe>} */}
      {/* <AppAframe></AppAframe> */}
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas

        shadows={true}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [- 4, 3, 6]
        }}
      >
        <XR store={store}>
          <Experience />
        </XR>
      </Canvas>
    </>
  )
}