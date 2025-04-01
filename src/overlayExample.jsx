import { useState } from "react";

export default function OverlayTransition() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen ">
      {/* Primer Div (Base) */}
      <div className="fixed inset-0 flex items-center justify-center bg-blue-500">
        <button
          className="px-4 py-2 bg-white text-blue-500 font-bold rounded shadow"
          onClick={() => setIsOpen(true)}
        >
          Abrir Rojo
        </button>
      </div>

      {/* Segundo Div (Overlay con Scroll) */}
      <div
        className={`fixed top-0 left-0 w-full h-full transform transition-transform duration-500 ease-in-out  ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-[8000px] overflow-y-auto flex flex-col items-center p-4  bg-red-500">
          <button
            className="px-4 py-2 bg-white text-red-500 font-bold rounded shadow mb-4"
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button>
          <div className="h-[4000px] w-1/3 bg-yellow-400   flex items-center justify-center text-white text-2xl">
            Contenido con scrollaaadas
            dasdvnasdlaljdsf
          </div>
          <div className="h-[600px] bg-amber-200 w-full" ></div>
          <div className="h-[800px] bg-amber-300 w-full" ></div>
        </div>
      </div>
    </div>
  );
}
