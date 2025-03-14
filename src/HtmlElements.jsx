import { cameraToShaders, cameraIntro } from "./CameraControls"; // Asegúrate de usar la ruta correcta

const Menu = () => {
  return (
    <div className="fixed top-0 right-0 p-4 bg-gray-800 text-white">
      <ul>
        <li>
          <a href="#home" className="block p-2">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="block p-2">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="block p-2">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export function Buttons() {
  return (
    <div
      //  style={{ position: 'absolute', top: -450, left: 0, zIndex: 1} }
      className=" absolute -top-[450px] left-0 z-10 bg-amber-50"
      onPointerEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "default";
      }}
    >
      <button
        onClick={() => {
          cameraToShaders();
        }}
      >
        toShaders
      </button>
      <button
        onClick={() => {
          cameraIntro();
        }}
      >
        toIntro
      </button>
    </div>
  );
}
export function PlaceHolderImage() {
  console.log('estoy');
  
  return (
    <div className=" cursor-pointer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <img src="./working-on-it.gif" alt="Loading GIF" />
    </div>
  );
}

export default Menu;
