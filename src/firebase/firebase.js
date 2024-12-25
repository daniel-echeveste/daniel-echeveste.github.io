// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9_zzSBviXtPpK0z6UUj7PvtJs8raQ4TY",
  authDomain: "portfolio-f379b.firebaseapp.com",
  projectId: "portfolio-f379b",
  storageBucket: "portfolio-f379b.firebasestorage.app",
  messagingSenderId: "1022018216073",
  appId: "1:1022018216073:web:56cbd3c6a7e9e6e7bae658",
  measurementId: "G-E4ZE30VWMM"
}
async function subirArchivoGLB(archivo) {
    try {
      // Crea una referencia en el storage
      const archivoRef = ref(storage, `modelos/${archivo.name}`);
  
      // Sube el archivo
      const snapshot = await uploadBytes(archivoRef, archivo);
      console.log("Archivo subido con éxito:", snapshot);
  
      // Obtén la URL de descarga
      const url = await getDownloadURL(archivoRef);
      console.log("URL del archivo:", url);
  
      return url; // Puedes usar esta URL para cargar el archivo en tu app
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
  }

  // Ejemplo: Escuchar un input de archivo
const inputArchivo = document.querySelector("#inputArchivo");
inputArchivo.addEventListener("change", (evento) => {
  const archivo = evento.target.files[0];
  if (archivo) {
    subirArchivoGLB(archivo);
  }
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);