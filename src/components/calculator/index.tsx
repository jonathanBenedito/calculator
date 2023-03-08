import React, { useState } from 'react';
import { Buttons } from '../buttons';
import { Header } from '../header';
import { ResultDisplay } from '../result-display';
import "./style.css"

export interface IState {
    calculator: {
        input: string
        result: number
    }
}

const Calculator: React.FC = () => {

    const [calculator, setCalculator] = useState<IState["calculator"]>({
        input: "",
        result: 0
    })

    return (
        <main className="main-content">

            <article className="calculator">
                <Header />
                <ResultDisplay input={calculator.input} result={calculator.result} />
                <Buttons {...{ calculator, setCalculator }} />
            </article>

        </main>
    );
}

export default Calculator;
