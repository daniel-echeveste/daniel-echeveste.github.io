import { useState } from "react";

export default function OverlayTransition() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
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
        className={`fixed inset-0 bg-red-500 opacity-35 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 1000 }} // Ensure it’s above other content
      >
        <div className="absolute inset-0 overflow-y-auto p-4">
          <button
            className="px-4 py-2 bg-white text-red-500 font-bold rounded shadow mb-4"
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button>
          <div className="h-[8000px] flex flex-col items-center">
            <div className="h-[4000px] w-1/3 bg-yellow-400 flex items-center justify-center text-white text-2xl">
              Contenido con scrollaaadas
              dasdvnasdlaljdsf
            </div>
            <div className="h-[600px] bg-amber-200 w-full"></div>
            <div className="h-[800px] bg-amber-300 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}