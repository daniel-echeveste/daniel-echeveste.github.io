import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

export default function App() {
    return <>
        <Canvas
            shadows
            camera={{
                fov: 60,
                near: 0.1,
                far: 200,
                position: [0, 0, 4]
            }}
        >
            <Experience />
        </Canvas>
    </>
}