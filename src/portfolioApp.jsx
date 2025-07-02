import ReactDOM from "react-dom/client";

import './styles/style.css'
import Portfolio from "./traditionalPortfolio/BasicPortfolio.jsx";
const root = ReactDOM.createRoot(document.querySelector('#rootPortfolio'))
root.render(<>
    <PortfolioApp></PortfolioApp>
</>
)
export default function PortfolioApp() {
    return (
        <>
            
                <Portfolio />
            

        </>
    );
}
