import React, { useState } from 'react';
import { Buttons } from '../buttons';
import { Header } from '../header';
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
        <main className="calculator">

            <Header input={calculator.input} />
            <input type="text" value={calculator.result} />      
            <Buttons {...{calculator, setCalculator}} />

        </main>
    );
}

export default Calculator;
