export default function Lights({controls}) {
    const lights = controls.Lights
    const sunset = {
        color: "#f55c00",
        intensity: 8
    }
    
  return (
      <>
          <directionalLight castShadow position={[lights.directionalPositionX, lights.directionalPositionY, lights.directionalPositionZ]} intensity={sunset.intensity} color={sunset.color}/>
          <ambientLight intensity={1.5} color={"#ff0000"}/> 
      </>
  )
}
