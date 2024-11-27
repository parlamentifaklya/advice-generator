// AdvicePage.tsx
import React, { useState } from "react";
import "./AdvicePage.css";
import dice from "../../images/icon-dice.svg";
import desktopSeparator from "../../images/pattern-divider-desktop.svg";
import { getAdvice } from "./Advice";

export interface AdviceProps {
    id: number;
    text: string;
}

const AdvicePage: React.FC<AdviceProps> = ({ id, text }) => {
    const [advice, setAdvice] = useState<AdviceProps>({ id, text });

    const fetchNewAdvice = async () => {
        const newAdvice = await getAdvice();
        setAdvice(newAdvice);
    };

    return (
        <div className="container">
            <div className="advice-card">
                <h1 className="advice-number">Advice #{advice.id}</h1>
                <p className="advice-text">"{advice.text}"</p>
                <img className="dividerImg" src={desktopSeparator} alt="Divider" />
                <button className="btnNewAdvice" type="button" onClick={fetchNewAdvice}>
                    <img className="btnContentImg" src={dice} alt="Get New Advice" />
                </button>
            </div>
        </div>
    );
};

export default AdvicePage;