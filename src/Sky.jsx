import { useEffect, useState } from 'react'
import ControlsManager from './LevaControls'; 
import { useThree, useFrame } from "@react-three/fiber";

import { Sky } from '@react-three/drei'

export default function OurSky({controls}) {

    const sky = controls.skyControls


    return (
        <Sky
            
            // sunPosition={[sky.PositionX, sky.PositionY, sky.PositionZ]} 
            inclination={sky.Inclination}
            
            //  elevation={sky.Elevation}
            azimuth={sky.Azimuth}
             distance={sky.Distance}
             mieCoefficient = {sky.mieCoefficient}
             mieDirectionalG = {sky.mieDirectionalG}
             rayleigh = {sky.rayleigh}
             turbidity = {sky.turbidity}
             exposure = {sky.Exposure}
        />
    );
}

            {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  /> */}
