import { useControls, folder, } from "leva";

const ControlsManager = () => {
  const skyControls = useControls("Sky", {
    PositionX: { value: 0, min: -2, max: 2, step: 0.001 },
    PositionY: { value: 0.5, min: -2, max: 2, step: 0.001 },
    PositionZ: { value: 0, min: -2, max: 2, step: 0.001 },
    // Intensity: { value: 1, min: 0, max: 3, step: 0.1 },
    Azimuth: { value: 0.25, min: -180, max: 180 },
    // Elevation: { value: 2, min: 0, max: 80 },
    // Distance: { value: 450000, min: 0, max: 1000000 },
    // Inclination: { value: 0, min: -10, max: 1000000 },
    mieCoefficient: { value: 0.005, min: 0, max: 0.1, step:0.001 },
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
  
  return {
    skyControls: skyControls,
    IslandControls: IslandControls,
    CameraControls: CameraControls
  };
};

export default ControlsManager;
