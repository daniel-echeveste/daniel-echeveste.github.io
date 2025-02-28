    
import Island1 from './models/Island1'
import Placeholder from './Placeholder'
import { useState, Suspense } from "react";
export default function IntroIsland() {
    return (
        <>
         <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
            <Island1 position-z={0} position-y={-1} scale={0.5}></Island1>
        </Suspense>
        </>
    )
}