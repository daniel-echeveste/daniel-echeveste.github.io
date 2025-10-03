import { useState } from "react";
import { motion } from "framer-motion";
import RoundImage from "../components/roundImage";
import translations from "../components/translations";
import { useLanguage } from "../../hooks/languageContext";

export default function TiltCard({
  darkMode,
  children,
  maxRotate = 12,
  shadowPower = 1,
  styles = "",
  normalShadow = "0px 0px 10px rgba(0,0,0,0.2)",
}) {
  const [style, setStyle] = useState({});
  const { lang } = useLanguage();
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // Posición X dentro del div
    const y = e.clientY - rect.top; // Posición Y dentro del div

    const rotateY = (x / rect.width - 0.5) * (maxRotate * 2); // -maxRotate a maxRotate
    const rotateX = (y / rect.height - 0.5) * (maxRotate * 2);

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `${-rotateY * shadowPower}px ${
        -rotateX * shadowPower
      }px 20px rgba(0,0,0,1)`,
      transition: "transform 0s, box-shadow shadow-neutral-950 0s",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      boxShadow: normalShadow,
      transition: "transform 0s ease, box-shadow 0s ease",
    });
  };

  return (
    <div
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`hover:scale-105 shadow-md transition-all  will-change-transform p-4 rounded-2xl ${
        darkMode ? " hover:bg-gray-700" : "hover:bg-neutral-100 "
      }` + styles}
    >
        {children}
    </div>
  );
}
