import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import OurSky from './Sky'
import IntroIsland from './IntroIsland'
import ControlsManager from './LevaControls';
import CameraControls from './camera/CameraControls';
import IntroText from './Texts';
import Interface from './Interface';
import Lights from './lights';

export default function Experience() {
      const controls = ControlsManager();
      const Camera = useRef();
    return (
        <>
            {/* <OrbitControls makeDefault /> */}

            <Perf position="bottom-left"></Perf>
            <Lights controls={controls}></Lights>
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
