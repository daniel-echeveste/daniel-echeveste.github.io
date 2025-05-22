export function Footer() {
    return (
        <footer className="py-6 text-center bg-gray-900 border-t border-gray-800">
            <p className="text-gray-400">
                © {new Date().getFullYear()}
            </p>
        </footer>
    );
}