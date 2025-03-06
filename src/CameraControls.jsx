// components/CameraControls.jsx
import { useControlStore } from "./ZustandControls";
import { useEffect, useRef} from "react";
import { useFrame, extend } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";


export default function CameraControls({controls}) {
  const { camera } = useThree();
  const CameraControls = controls.CameraControls
 const CameraBall = useRef()
  // {
  //   PositionX: {value: 15, min: -50, max: 200, step: 0.001  },
  //   PositionY: { value: 15, min: -50, max: 200, step: 0.001 },
  //   PositionZ: { value: 150, min: -50, max: 200, step: 0.001  },
  camera.position.y = CameraControls.PositionY> (-200) ? CameraControls.PositionY : 15
  camera.position.x = CameraControls.PositionX> (-200) ? CameraControls.PositionX :200
  camera.position.z = CameraControls.PositionZ> (-200) ? CameraControls.PositionZ :150
  
  cameraIntro(camera)
  useFrame(()=>{
    camera.lookAt(CameraBall.current.position)
  })
  return <>
            <mesh ref={CameraBall}castShadow position={[-20, 15, 0]} >
                    <sphereGeometry />
                    <meshStandardMaterial color="red" />

              </mesh>

    </>;
}
function cameraIntro(camera){
  var done = false
  console.log('pepe');
  if(!done){
    useFrame((state, delta) => {
      console.log('dentro');
      if(!done){
        if( camera.position.x>=10){
          console.log(camera.position.x);
          camera.position.x -= 0.1
        }
        if( camera.position.z>=100){
          console.log(camera.position.x);
          camera.position.z -= 0.01
        }
        if(camera.position.z<100 && camera.position.x<10){
          done=true
          console.log('intro done');
        }
      }
    });
  }
}
