import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'
import { SphereGeometry, } from 'three'
import { OrbitControls, Html,Float, Stage, } from '@react-three/drei'

const store = createXRStore()

export default function App() {
  const [red, setRed] = useState(true)
  const [isVR, setIsVR] = useState(false);
  const [showIframe, setShowIframe] = useState(false) // Add state to track iframe visibility
  const handleClickBall = () => {
    setShowIframe(!showIframe); // Toggle iframe visibility on sphere click
    setRed(!red)
  }
  const enterXR = ()=>{
    store.enterVR()
    setIsVR(true);
    console.log(store.getState());
  }
  const exitXR = ()=>{
    store.enterVR()
    setIsVR(true);
    console.log(store.getState());
  }
  return (
    <>
       {!isVR && <button onClick={enterXR} className='xr-button'>Enter VR</button>}
      {isVR && <button onClick={exitXR} className='xr-button'>Exit VR</button>}
      <Canvas>
        <XR store={store}>

        <Stage
            shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
            environment="sunset"
            preset="portrait"
            intensity={7}
        >
          <OrbitControls></OrbitControls>
          <mesh pointerEventsType={{ deny: 'grab' }} onClick={handleClickBall} position={[0, 1, -1]}>
            <boxGeometry />
            <meshStandardMaterial color={red ? 'red' : 'green'} />
          </mesh>
          <mesh pointerEventsType={{ deny: 'grab' }} position={[3, 1, -2]} onClick={() => setRed(!red)} >
            <sphereGeometry />
            <meshStandardMaterial color={red ? 'red' : 'blue'} />
          </mesh>
         
          {showIframe && (
              <Float>
                <Html
                  transform
                  wrapperClass='htmlScreen'
                  distanceFactor={1.17}
                  position={[0, 3, -2]}
                >
                  <iframe src="https://bruno-simon.com/html/" />
                </Html>
              </Float>
            )}

        </Stage>
        </XR>
      </Canvas>
    </>
  )
}