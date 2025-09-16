import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import translations from "../components/translations";
import { useLanguage } from "../../hooks/languageContext";


export function ContactForm( {darkMode, isHorizontal} ) {
    const form = useRef();
    const [status, setStatus] = useState({ message: "", type: "" });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { lang } = useLanguage();
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
                    setStatus({ message: lang == "en" ? translations.Contact.success.en : translations.Contact.success.es, type: "success" });
                    setFormData({ name: "", email: "", message: "" });
                    form.current.reset();
                },
                (error) => {
                    setStatus({ message: lang == "en" ? translations.Contact.error.en : translations.Contact.error.es + error.text, type: "error" });
                }
            );
    };

    return (
        <section id="contact" className={` py-20 max-h-screen ${isHorizontal ? "min-h-screen ":""} ${darkMode ? "text-white" : "text-amber-950"}`}>
            <div className="max-w-6xl mx-auto px-4 pt-20">  
            <h2 className="text-4xl font-bold text-center mb-12" >{lang == "en" ? translations.Contact.en : translations.Contact.es}</h2>
            <form
                ref={form}
                onSubmit={sendEmail}
                className={`max-w-6xl mx-auto p-6  rounded-xl shadow-lg ${darkMode ? "text-white bg-gray-800" : "text-amber-50 bg-amber-950"}`}
            >
                <label className="block mb-3">
                   {lang == "en" ? translations.Contact.name.en : translations.Contact.name.es}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full mt-1 p-2 rounded border ${darkMode ? "bg-white text-gray-950" : "bg-amber-50 text-amber-950"}`}
                        required
                    />
                </label>

                <label className="block mb-3">
                   {lang == "en" ? translations.Contact.email.en : translations.Contact.email.es}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full mt-1 p-2 rounded border ${darkMode ? "bg-white text-gray-950" : "bg-amber-50 text-amber-950"}`}
                        required
                    />
                </label>

                <label className="block mb-3">
                    {lang == "en" ? translations.Contact.message.en : translations.Contact.message.es}:
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full mt-1 p-2 rounded border ${darkMode ? "bg-white text-gray-950" : "bg-amber-50 text-amber-950"}`}
                        required
                    />
                </label>

                <button
                    type="submit"
                    className={`bg-amber-700 text-white px-4 py-2 rounded transition ${darkMode ? "bg-gray-600 hover:bg-gray-500  " : "bg-amber-700 hover:bg-amber-600"}`}
                >
                    {lang == "en" ? translations.Contact.send.en : translations.Contact.send.es}
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
            </div>
        </section>
    );
}
