import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import OurSky from './Sky'
import IntroIsland from './IntroIsland'
import ControlsManager from '../LevaControls';
import CameraControls from '../camera/CameraControls';
import IntroText from './Texts';
import Interface from './Interface';
import Lights from './Lights';

export default function Experience({ darkMode, Controls,  }) {
      const controls = ControlsManager();
    //   const Camera = useRef();
      console.log(darkMode?'oscuro':'claro');
      
    return (
        <>
            {/* <OrbitControls makeDefault /> */}
            <CameraControls controls={controls} />
            <Perf position="bottom-left"></Perf>
            <Lights 
                controls={controls} 
                darkMode={darkMode}
            ></Lights>
            {/* <CameraControls 
                controls={controls}
            /> */}
            <OurSky
                controls={controls}
                darkMode={darkMode}
            />
            <IntroIsland
                controls={controls}
            />
            <IntroText />
            <Interface />
        </>
    )
}
