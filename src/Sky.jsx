import { useEffect, useState, useRef} from 'react'
import ControlsManager from './LevaControls'; 
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
            inclination={controls.skyControls.Inclination}
            azimuth={controls.skyControls.Azimuth}
             distance={controls.skyControls.Distance}
             mieCoefficient = {controls.skyControls.mieCoefficient}
             mieDirectionalG = {controls.skyControls.mieDirectionalG}
             rayleigh = {controls.skyControls.rayleigh}
             turbidity = {controls.skyControls.turbidity}
             exposure = {controls.skyControls.Exposure}
        />
    </>
        //Sunset Sky
       
    );
}
function MoveSkyTo(targetSky,currentSky){
    console.log(currentSky);
    console.log(targetSky);
    
    
    gsap.to(currentSky.current, {
        //   position: { x: targetSky.PositionX, y: targetSky.PositionY, z: targetSky.PositionZ },
          azimuth: targetSky.Azimuth,
          elevation: targetSky.Elevation,
          distance: targetSky.Distance,
          inclination: targetSky.Inclination,
          mieCoefficient: targetSky.mieCoefficient,
          mieDirectionalG: targetSky.mieDirectionalG,
          rayleigh: targetSky.rayleigh,
          turbidity: targetSky.turbidity,
          exposure: targetSky.Exposure,
          duration: 3, // Duration of the animation (1 second)
          ease: "power1.inOut" // Ease effect for smoothness
        });
}