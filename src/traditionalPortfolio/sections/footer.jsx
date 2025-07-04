export function Footer({ darkMode, isHorizontal }) {
    return (
        <footer className={`py-6 text-center ${darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-amber-950 border-t border-amber-200"}`}>
            <p className="text-gray-400">
                © {new Date().getFullYear()}
            </p>
        </footer>
    );
}