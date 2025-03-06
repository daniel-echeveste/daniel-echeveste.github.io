import { create } from "zustand";

export const useControlStore = create((set) => ({
  controls: {},

  addControl: (folder, name, options) =>
    set((state) => ({
      controls: {
        ...state.controls,
        [`${folder}.${name}`]: options.value, // Almacenamos el valor inicial
      },
    })),

  updateControl: (folder, name, value) =>
    set((state) => ({
      controls: {
        ...state.controls,
        [`${folder}.${name}`]: value, // Actualizamos el valor cuando cambia
      },
    })),
}));