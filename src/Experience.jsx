import { Perf } from 'r3f-perf'
import { useEffect, useState } from 'react'
import { OrbitControls, } from '@react-three/drei'
import OurSky from './Sky'
import WorkingPlaceholder from './WorkingPlaceholder'
import IntroIsland from './IntroIsland'
import LevaControls from './LevaControls'

export default function Experience() {
    const [develop, setDevelop] = useState(false)

    useEffect(() => {
        if (window.location.hash === '#develop') {
            setDevelop(true)
        }
    }, [])
   
      
    return (
        <>
            <LevaControls></LevaControls>
            <OrbitControls makeDefault />
            <Perf position="top-left"></Perf>
            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            {!develop && <WorkingPlaceholder></WorkingPlaceholder>} 
            <OurSky></OurSky>
            <IntroIsland></IntroIsland>
            {/* Renderizar shaders solo si la URL contiene #develop */}
            {/* {develop && <Shaders />}
            {showShaders &&  <Perf position="top-left" />} */}
        </>
    )
}
