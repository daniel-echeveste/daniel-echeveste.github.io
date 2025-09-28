export function Footer({ darkMode, isHorizontal }) {
    return (
        <footer className={`py-6 text-center ${darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-amber-950 border-t border-amber-200"}`}>
            <p className="text-gray-400">
                © {new Date().getFullYear()}
            </p>
            <p className="text-gray-400">
                Daniel Echeveste - Developer
            </p>
            
            <li className="mt-4 text-gray-400"> 
                navigation
                <ul>
                    <a href="#about" className="text-gray-400 hover:underline mx-2">About</a>
                    <a href="#skills" className="text-gray-400 hover:underline mx-2">skills</a>
                    <a href="#projects" className="text-gray-400 hover:underline mx-2">Projects</a>
                    <a href="#education" className="text-gray-400 hover:underline mx-2">education</a>
                    <a href="#experience" className="text-gray-400 hover:underline mx-2">experience</a>
                    <a href="#certifications" className="text-gray-400 hover:underline mx-2">certifications</a>
                    <a href="#contact" className="text-gray-400 hover:underline mx-2">Contact</a>
                    <a href="#footer" className="text-gray-400 hover:underline mx-2">Footer</a>
                </ul>       
            </li>
            <p className="text-gray-400 mt-2">
                {isHorizontal ? "Horizontal Layout" : "Vertical Layout"}
            </p>
            <p className="text-gray-400 mt-2">
                
                 "Low poly man working at a table with a laptop" (https://skfb.ly/o7XDs) by Agor_2012 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
            </p>
           
        </footer>
    );
}