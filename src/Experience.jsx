import { Perf } from 'r3f-perf'

import { OrbitControls, Text3D } from '@react-three/drei'
import { useEffect, useRef } from 'react'

import OurSky from './Sky'
import IntroIsland from './IntroIsland'
import ControlsManager from './LevaControls';
import CameraControls from './camera/CameraControls';
import IntroText from './Texts';
import Interface from './Interface';
export default function Experience() {
      const controls = ControlsManager();
      const Camera = useRef();
    return (
        <>
            {/* <OrbitControls makeDefault /> */}

            <Perf position="bottom-left"></Perf>
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
            <IntroText />
            <Interface />
        </>
    )
}
