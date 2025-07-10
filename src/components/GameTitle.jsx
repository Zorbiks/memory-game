import "../styles/GameTitle.css";

import LogoSrc from "../assets/logo.png";

const GameTitle = () => {
    return (
        <header>
            <div className="container">
                <div className="game-title">
                    <h1>Memory Game</h1>
                    <img className="logo" src={LogoSrc} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default GameTitle;