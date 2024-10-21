import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'
import { SphereGeometry, } from 'three'
import { OrbitControls, Html,Float, Stage, } from '@react-three/drei'


const store = createXRStore()
export default function AppXR() {
 
//   const [red, setRed] = useState(true)
//   const [isVR, setIsVR] = useState(false);
//   const [isAR, setIsAR] = useState(false);
//   const [isXR, setIsXR] = useState(false);
//   const [showIframe, setShowIframe] = useState(false) // Add state to track iframe visibility
//   const handleClickBall = () => {
//     setShowIframe(!showIframe); // Toggle iframe visibility on sphere click
//     setRed(!red)
//   }
//   const enterAR = ()=>{
//     store.enterAR()
//     setIsAR(true);
//     console.log(store.getState());
//   }
//   const enterVR = ()=>{
//     store.enterVR()
//     setIsVR(true);
//     console.log(store.getState());
//   }
//   const enterXR = ()=>{
//     store.enterXR()
//     setIsXR(true);
//     console.log(store.getState());
//   }
const [red, setRed] = useState(false)

  return (
    <>
        <button onClick={() =>{
          try {
            store.enterAR()
          }catch(e) {
            console.log('pepe')
            alert(e)
          }
        }}>Enter AR</button>
     <Canvas>
      <XR store={store}>
        <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
          <boxGeometry />
          <meshBasicMaterial color={red ? 'red' : 'blue'} />
        </mesh>
      </XR>
    </Canvas>
      {/* {!isVR && <button onClick={enterVR} className='vr-button'>Enter VR</button>}
      {!isAR && <button onClick={enterAR} className='ar-button'>Enter AR</button>}
      {!isXR && <button onClick={enterXR} className='xr-button'>Eenter XR</button>}

      <Canvas>
        <XR store={store}>
        <Stage
            shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
            environment="sunset"
            preset="portrait"
            intensity={7}
        >
          <OrbitControls></OrbitControls>
          <mesh pointerEventsType={{ deny: 'grab' }} onClick={handleClickBall} position={[0, 3, -5]}>
            <boxGeometry />
            <meshStandardMaterial color={red ? 'red' : 'green'} />
          </mesh>
          <mesh pointerEventsType={{ deny: 'grab' }} position={[3, 3, -5]} onClick={() => setRed(!red)} >
            <sphereGeometry />
            <meshStandardMaterial color={red ? 'red' : 'blue'} />
          </mesh>
          {showIframe && (
              <Float>
                <Html
                  transform
                  wrapperClass='htmlScreen'
                  distanceFactor={1.17}
                  position={[0, 5, -2]}
                >
                  <iframe src="https://bruno-simon.com/html/" />
                </Html>
              </Float>
            )}

        </Stage>
        </XR>
      </Canvas> */}
    </>
  )
}