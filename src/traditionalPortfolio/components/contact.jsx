import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm({ darkMode, isEng }) {
    const form = useRef();
    const [status, setStatus] = useState({ message: "", type: "" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const validateForm = () => {
        if (!formData.name.trim()) return "El nombre es obligatorio.";
        if (!formData.email.trim()) return "El email es obligatorio.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return "El email no es válido.";
        if (!formData.message.trim()) return "El mensaje no puede estar vacío.";
        return "";
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const errorMsg = validateForm();
        if (errorMsg) {
            setStatus({ message: errorMsg, type: "error" });
            return;
        }

        emailjs
            .sendForm(
                "service_n1wulhs",     // Reemplaza con tu ID
                "template_41o2h9g",    // Reemplaza con tu ID
                form.current,
                "mkszaPcFWHZObJ6sR"      // Reemplaza con tu Key
            )
            .then(
                () => {
                    setStatus({ message: "Mensaje enviado correctamente!", type: "success" });
                    setFormData({ name: "", email: "", message: "" });
                    form.current.reset();
                },
                (error) => {
                    setStatus({ message: "Error al enviar: " + error.text, type: "error" });
                }
            );
    };

    return (
        <section id="contact" className="bg-amber-950 p-10 text-amber-100">
            <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-6xl mx-auto p-6 bg-white dark:bg-amber-950 rounded-xl shadow-lg"
            >
                <label className="block mb-3">
                    Nombre:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full mt-1 p-2 rounded border dark:bg-amber-100"
                        required
                    />
                </label>

                <label className="block mb-3">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full mt-1 p-2 rounded border dark:bg-amber-100"
                        required
                    />
                </label>

                <label className="block mb-3">
                    Mensaje:
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full mt-1 p-2 rounded border dark:bg-amber-100"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Enviar
                </button>

                <AnimatePresence>
                    {status.message && (
                        <motion.p
                            key="status"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`mt-4 text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {status.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </form>
        </section>
    );
}
