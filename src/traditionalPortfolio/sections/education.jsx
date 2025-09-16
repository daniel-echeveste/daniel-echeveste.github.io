import { motion } from "framer-motion";
import translations from "../components/translations";
import { useLanguage } from "../../hooks/languageContext";

export function Education({ darkMode, isHorizontal }) {
  const { lang, toggleLang } = useLanguage();
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="education"
      className={`py-20 text-amber-950 ${
        isHorizontal ? "min-h-screen " : ""
      } max-h-screen ${darkMode ? "text-white" : "text-amber-950"}`}
    >
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-center mb-20"
        >
          {lang == "en" ? translations.Education.en : translations.Education.es}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            className={`rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-amber-500 hover:bg-amber-600"
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {lang == "en"
                  ? translations.Education.ULPGC.Name.en
                  : translations.Education.ULPGC.Name.es}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={
                    darkMode
                      ? "/icons/college-white.svg"
                      : "/icons/college-brown.svg"
                  }
                  className="w-6"
                  alt="university"
                />
                 {lang == "en"
                  ? translations.Education.ULPGC.University.en
                  : translations.Education.ULPGC.University.es}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={
                    darkMode
                      ? "/icons/calendar-white.svg"
                      : "/icons/calendar-brown.svg"
                  }
                  className="w-4"
                  alt="calendar"
                />
                2017 - 2019
              </div>
              <p
                className={`mt-4 ${
                  darkMode ? "text-gray-300" : "text-amber-800"
                }`}
              >
               {lang == "en"
                  ? translations.Education.ULPGC.Details.en
                  : translations.Education.ULPGC.Details.es}
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            className={`rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-amber-500 hover:bg-amber-600"
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                  {lang == "en"
                  ? translations.Education.Rincon.Name.en
                  : translations.Education.Rincon.Name.es}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={
                    darkMode
                      ? "/icons/college-white.svg"
                      : "/icons/college-brown.svg"
                  }
                  className="w-6"
                  alt="college"
                />
                {lang == "en"
                  ? translations.Education.Rincon.University.en
                  : translations.Education.Rincon.University.es}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={
                    darkMode
                      ? "/icons/calendar-white.svg"
                      : "/icons/calendar-brown.svg"
                  }
                  className="w-4"
                  alt="calendar"
                />
                2019 - 2022
              </div>
              <p
                className={`mt-4 ${
                  darkMode ? "text-gray-300" : "text-amber-800"
                }`}
              >
                {lang == "en"
                  ? translations.Education.Rincon.Details.en
                  : translations.Education.Rincon.Details.es}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
