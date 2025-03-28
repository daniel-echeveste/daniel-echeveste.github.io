export default function Lights({controls}) {
    const lights = controls.Lights
    
  return (
      <>
          <directionalLight castShadow position={[lights.directionalPositionX, lights.directionalPositionY, lights.directionalPositionZ]} intensity={lights.directionalIntensity} color={lights.directionalColor}/>
          <ambientLight intensity={1.5} /> 
      </>
  )
}
