import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";


export function FootprintTrail() {
    const [dots, setDots] = useState([]);
    const idCounter = useRef(0);
    const lastDotTime = useRef(0);
    const lastPosition = useRef({ x: null, y: null });

    function removeDot(id) {
        setDots((dots) => dots.filter((dot) => dot.id !== id));
    }

    useEffect(() => {
        function onMouseMove(e) {
          const now = Date.now();
          if (now - lastDotTime.current < 150) return; // throttle every 150ms
          lastDotTime.current = now;
    
          const current = { x: e.clientX, y: e.clientY };
          const previous = lastPosition.current;
          lastPosition.current = current;
    
          // Don't place a dot on first move (no previous yet)
          if (previous.x === null) return;
    
          // Calculate angle in degrees
          const dx = current.x - previous.x;
          const dy = current.y - previous.y;
          const angleRad = Math.atan2(dy, dx);
          const angleDeg = (angleRad * 180) / Math.PI;
    
          const newDot = {
            id: now + "-" + idCounter.current,
            x: current.x,
            y: current.y,
            angle: angleDeg,
          };
          idCounter.current += 1;
    
          setDots((dots) => {
            const updated = [...dots, newDot];
            if (updated.length > 8) updated.shift(); // keep max 8
            return updated;
          });
        }
    
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
      }, []);
    

    return (
        <>
            {/* <style>{`body { cursor: none; }`}</style> */}
            {dots.map(({ id, x, y, angle }) => (
                <TrailDot key={id} x={x} y={y} angle={angle} onFadeOut={() => removeDot(id)} />
            ))}
        </>
    );
}

function TrailDot({ x, y, angle, onFadeOut }) {
    const dotRef = React.useRef(null);
    const stepIndex = useRef(0);
    const stepImage = stepIndex.current % 2 === 0 ? "/imgs/footprintLeft.png" : "/imgs/footprintRight.png";
    stepIndex.current += 1;
    React.useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        gsap.fromTo(
            dot,
            { opacity: 0.6, scale: 1 },
            {
                opacity: 0,
                scale: 1,
                duration: 1,
                ease: "power1.inOut",
                onComplete: () => {
                    onFadeOut()
                },
            }
        );
    }, [onFadeOut]);
   
    return (
        <img
            ref={dotRef}
            src="/imgs/footPrint.png" // your footprint image path here
            alt="footprint"
            className="fixed pointer-events-none"
            style={{
                top: y - 16,
                left: x - 16,
                width: 32,
                height: 32,
                userSelect: "none",
                transform: `rotate(${angle + 90}deg)`,
            }}
            draggable={false}
        />
    );
}