import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";


export default function RoundImage({ src1, src2, alt, strength, parallax }) {
    const containerRef = useRef(null);



    const mouse = {
        x: useMotionValue(0.5),
        y: useMotionValue(0.5)
    }
    const rotateX = useTransform(mouse.y, [0, 1], [15, -15]);
    const rotateY = useTransform(mouse.x, [0, 1], [-15, 15]);

    const firstTimeAnimation = useEffect(() => {
        const obj = { x:mouse.x.get(), y: mouse.y.get() };
        const objAngle = { angle: 0 };
        gsap.to(objAngle, {
            angle: Math.PI * 2 ,
            duration: 1,
            ease: "none",
            repeat: 1,
            onUpdate: () => {             
                const radius = 0.1; // cuánto se moverá desde el centro (0.5)
                const x = 0.5 + (radius * Math.sin(objAngle.angle));
                const y = 0.5 + (radius * Math.cos(objAngle.angle));
                mouse.x.set(x);
                mouse.y.set(y);
            }
        });

    }, [])

    const handleMouseMove = (e) => {
        if (parallax) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            mouse.x.set(x);
            mouse.y.set(y);
        }
    };

    const handleMouseLeave = () => {
        mouse.x.set(0.5);
        mouse.y.set(0.5);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-square w-full fg border-amber-500 bg-amber-500 rounded-full overflow-hidden "
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full h-full transition-transform duration-100 ease-in-out"
            >
                {/* Background Layer */}
                <motion.img
                    src={src1}
                    alt={alt}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-full transition-all duration-100"
                    style={{
                        x: useTransform(mouse.x, [0, 1], [1 * strength, -1 * strength]),
                        y: useTransform(mouse.y, [0, 1], [1 * strength, -1 * strength]),
                        zIndex: 0,
                    }}
                />
                {/* Front Layer */}
                <motion.img
                    src={src2}
                    alt={alt}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-full transition-all duration-100 "
                    style={{
                        x: useTransform(mouse.x, [0, 1], [3 * strength, -3 * strength]),
                        y: useTransform(mouse.y, [0, 1], [3 * strength, -3 * strength]),
                        zIndex: 1,
                    }}
                />
            </motion.div>
        </div>
    );
}
