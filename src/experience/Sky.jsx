import { useEffect, useState, useRef} from 'react'
import ControlsManager from '../LevaControls'; 
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";

import { Sky } from '@react-three/drei'

export default function OurSky({controls, darkMode}) {
    const thisSky = useRef()
    // const sky = controls.skyControls
    console.log(darkMode?'darkSky':'lightSky');
    
    const sunsetSky =  
    {
        PositionX : 0, PositionY:  0.5, PositionZ:  0,

        Azimuth:  0, Elevation: 2, Distance:  450000,
        Inclination:  0.5, mieCoefficient:  0.005, mieDirectionalG:  0.7,
        rayleigh:  3, turbidity: 10, Exposure:0.5, 
    }
    const sunnySky =  
    {
        PositionX : 0,
        PositionY:  0.5,
        PositionZ:  0,
        Azimuth:  0,
        Elevation: 2,
        Distance:  450000,
        Inclination:  0.5, 
        mieCoefficient:  0.005, 
        mieDirectionalG:  0.7,
        rayleigh:  3, 
        turbidity: 10, 
        Exposure:0.5, 
    }
    const nightSky =  
    {
        PositionX : 0,
        PositionY:  0.5,
        PositionZ:  0,
        // Intensity: { value: 1, min: 0, max: 3, step: 0.1 },
        Azimuth:  0,
        Elevation: 2,
        Distance:  450000,
        Inclination:  0.6, 
        mieCoefficient:  0.005, 
        mieDirectionalG:  1,
        rayleigh:  0.1, 
        turbidity: 30, 
        Exposure:1, 
    }
    useEffect(() => {
        const targetSky = darkMode ? sunsetSky : nightSky;
        MoveSkyTo(targetSky, thisSky)
     
      }, [darkMode]);
      const currentSky = darkMode ? sunsetSky : nightSky;

      
    return ( <>
        <Sky 
            ref={thisSky}
            inclination={currentSky.Inclination}
            azimuth={currentSky.Azimuth}
             distance={currentSky.Distance}
             mieCoefficient = {currentSky.mieCoefficient}
             mieDirectionalG = {currentSky.mieDirectionalG}
             rayleigh = {currentSky.rayleigh}
             turbidity = {currentSky.turbidity}
             exposure = {currentSky.Exposure}
        />
    </>
        //Sunset Sky
       
    );
}
function MoveSkyTo(targetSky,currentSky){
    console.log('pepe');
    
    console.log(currentSky);
    console.log(targetSky);
    
    // currentSky.current = targetSky
    // const dummy = { 
    //     azimuth: currentSky.current.azimuth,
    //     elevation: currentSky.current.elevation,
    //     distance: currentSky.current.distance,
    //     inclination: currentSky.current.inclination,
    //     mieCoefficient: currentSky.current.mieCoefficient,
    //     mieDirectionalG: currentSky.current.mieDirectionalG,
    //     turbidity: currentSky.current.turbidity,
    //     exposure: currentSky.current.exposure,
    //     rayleigh: currentSky.current.rayleigh

    //   }
    // gsap.to(dummy, {
    //     //   position: { x: targetSky.PositionX, y: targetSky.PositionY, z: targetSky.PositionZ },
    //     //   azimuth: targetSky.Azimuth,
    //     //   elevation: targetSky.Elevation,
    //     //   distance: targetSky.Distance,
    //       inclination: targetSky.Inclination,
    //       mieCoefficient: targetSky.mieCoefficient,
    //       mieDirectionalG: targetSky.mieDirectionalG,
    //       rayleigh: targetSky.rayleigh,
    //       turbidity: targetSky.turbidity,
    //       exposure: targetSky.Exposure,
    //       duration: 3, // Duration of the animation (1 second)
    //       ease: "power1.inOut",
    //       onUpdate: () => {
    //         console.log(dummy);
            
    //         // currentSky.current.azimuth = dummy.azimuth;
    //         // currentSky.current.elevation = dummy.elevation;
    //         // currentSky.current.distance = dummy.distance;
    //         currentSky.current.inclination = dummy.inclination;
    //         currentSky.current.mieCoefficient = dummy.mieCoefficient;
    //         currentSky.current.mieDirectionalG = dummy.mieDirectionalG;
    //         currentSky.current.rayleigh = dummy.rayleigh;
    //         currentSky.current.turbidity = dummy.turbidity;
    //         currentSky.current.exposure = dummy.exposure;
    //       }, // Ease effect for smoothness
    //     });
}