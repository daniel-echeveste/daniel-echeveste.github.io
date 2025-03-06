
import Island1 from './models/Island1'
import Placeholder from './Placeholder'
import { useState, Suspense } from "react";
export default function IntroIsland({controls}) {
    const island = controls.IslandControls

    return (
        <>
         <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
            <Island1 position={[island.PositionX,island.PositionY,island.PositionZ]} scale={island.Scale}></Island1>
        </Suspense>
        </>
    )
}