import { useControls, folder, } from "leva";
import * as THREE from "three";
// CustomShaderMaterial.js
import { OrbitControls, Float, Text, useGLTF, shaderMaterial, Sky } from '@react-three/drei'
import { useMemo, useState, useRef,} from 'react'
import { useFrame, extend } from '@react-three/fiber'



const ControlsManager = () => {
  const skyControls = useControls("Sky", {
    PositionX: { value: 0, min: -2, max: 2, step: 0.001 },
    PositionY: { value: 0.5, min: -2, max: 2, step: 0.001 },
    PositionZ: { value: 0, min: -2, max: 2, step: 0.001 },
    // Intensity: { value: 1, min: 0, max: 3, step: 0.1 },
    Azimuth: { value: 0, min: 0, max: 1, step: 0.001  },
    Elevation: { value: 2, min: 0, max: 80 },
    Distance: { value: 450000, min: 0, max: 1000000 },
    Inclination: { value: 0.5, min: 0, max: 1 },
    mieCoefficient: { value: 0.005, min: 0, max: 10, step:0.001 },
    mieDirectionalG: { value: 0.7, min: 0, max: 1 },
    rayleigh: { value: 3, min: 0, max: 4 },
    turbidity: { value: 10, min: 0, max: 30 },
    Exposure: { value: 0.5, min: 0, max: 1 },
  },{collapsed:true});

  const IslandControls = useControls("Island", {
    PositionX: {value: 0, min: -50, max: 2, step: 0.001  },
    PositionY: { value: -10, min: -50, max: 2, step: 0.001 },
    PositionZ: { value: 0, min: -50, max: 2, step: 0.001  },
    Scale: { value: 1, min: 0, max: 2, step: 0.001 },
  },{collapsed:true});

  const CameraControls = useControls("Camera", {
    PositionX: {value: -250, min: -500, max: 500, step: 0.001  },
    PositionY: { value: -250, min: -500, max: 500, step: 0.001 },
    PositionZ: { value: -250, min: -500, max: 500, step: 0.001  },
  },{collapsed:true});
  
 
  
  const ShadersControls = useControls({
    Shaders: folder(
      {
        param1: 10,
        MainDirectionalLight: folder(
            {
                    uDepthColor:'#e5735e',
                    uSurfaceColor:'#000000',
                    uBigWavesElevation:
                    {
                        value: 0.2,
                        min: 0,
                        max: 1,
                        step:0.1
                    },
                    uBigWavesFrequency:
                    {
                        value:new THREE.Vector2(4, 1.2),
                    },
                    uBigWavesSpeed:
                    {
                        value:0.8,
                        min: 0,
                        max: 10,
                        step:0.1
                    },
                    uColorOffset: 0.8,
                    uColorMultiplier: 5.0,
                    uSmallWavesElevation: { value: 0.15 },
                    uSmallWavesFrequency: { value: 3 },
                    uSmallWavesSpeed: { value: 0.2 },
                    uSmallIterations: { value: 3 },
                },
          { collapsed: true } // Subfolder colapsado por defecto
        ),
      },
      { collapsed: true } // Main folder colapsado por defecto
    ),
  });

  const LightsControls = useControls({
    Lights: folder(
      {
        ambientPositionX:1,
        ambientPositionY:2,
        ambientPositionZ:3,
        ambientColor:'#ffffff',
        ambientIntensity:
            {
                value: 1,
                min: 0,
                max: 100,
                step:0.1
            },
        directionalPositionX:1,
        directionalPositionY:2,
        directionalPositionZ:3,
        directionalColor:'#ffffff',
        directionalIntensity:
              {
                value: 1,
                min: 0,
                max: 100,
                step:0.1
            },
      },
      { collapsed: true } // Main folder colapsado por defecto
    ),
  });

  return {
    skyControls: skyControls,
    IslandControls: IslandControls,
    CameraControls: CameraControls,
    ShadersControls: ShadersControls,
    Lights: LightsControls,
  };
};

export default ControlsManager;
