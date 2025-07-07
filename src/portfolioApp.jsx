import ReactDOM from "react-dom/client";
import { useState } from "react";
import './styles/style.css'
import Portfolio from "./traditionalPortfolio/BasicPortfolio.jsx";
import PortfolioHorizontal from "./traditionalPortfolio/BasicPortfolioHorizontal.jsx";
import NavigationBar from "./traditionalPortfolio/components/portfolioNavBar";
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<>
    <PortfolioApp></PortfolioApp>
</>
)
export default function PortfolioApp() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHorizontal, setIsHorizontal] = useState(true);
   
    const [currentSection, setCurrentSection] = useState('about');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const toggleHorizontal = () => {
        setIsHorizontal(!isHorizontal);
    };
    const handleSectionChange = (section) => {
        setCurrentSection(section);
    };
    return (
        <>
            <NavigationBar
                        darkMode={isDarkMode}
                        onDarkModeToggle={toggleDarkMode}
                        isHorizontal={isHorizontal}
                        onHorizontalToggle={toggleHorizontal}
                        currentSection={currentSection}
                        onSectionChange={handleSectionChange}
                      />
            {/* <PortfolioHorizontal  darkMode={isDarkMode} currentSection={currentSection} isHorizontal={isHorizontal} /> */}

          {isHorizontal ? <PortfolioHorizontal  darkMode={isDarkMode} currentSection={currentSection} isHorizontal={isHorizontal} onSectionChange={handleSectionChange} /> : <Portfolio darkMode={isDarkMode} currentSection={currentSection} isHorizontal={isHorizontal} />}
        </>
    );
}
