import { Perf } from 'r3f-perf'

import { OrbitControls, Text3D } from '@react-three/drei'
import OurSky from './Sky'
import IntroIsland from './IntroIsland'
import ControlsManager from './LevaControls';
import CameraControls from './CameraControls';
import IntroText from './Texts';

export default function Experience() {
    // const controls = useControlStore((state) => state.controls);

    // useControls se actualiza con los valores de Zustand
    // useControls(controls);
    
    
      const controls = ControlsManager()
    return (
        <>
        
            <OrbitControls makeDefault />
            <Perf position="top-left"></Perf>
            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <CameraControls
                controls={controls}
            />
            <OurSky
                controls={controls}
            />
            <IntroIsland
                controls={controls}
            />
            <IntroText></IntroText>
            
            {/* Renderizar shaders solo si la URL contiene #develop */}
            {/* {develop && <Shaders />}
            {showShaders &&  <Perf position="top-left" />} */}
        </>
    )
}
