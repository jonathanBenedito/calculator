import { IState as Props } from "../calculator";
import { evaluate } from 'mathjs';
import './style.css'
import { useEffect, useState } from "react";

interface IButtonProps {
    calculator: Props["calculator"],
    setCalculator: React.Dispatch<React.SetStateAction<Props["calculator"]>>
}

export const Buttons: React.FC<IButtonProps> = ({ calculator, setCalculator }) => {

    const handleNumClick = (num: number | string): void => {
        const { input, result } = calculator

        if (result !== 0 && checkOperator(num.toString())) {
            setCalculator({
                ...calculator,
                input: result.toString() + num,
                result: 0
            })
            return 
        }
        
        num = checkOperator(num.toString()) && input === "" ? "" : num
        setCalculator({ ...calculator, input: input + num, result: 0 })
    }

    const checkOperator = (value: string):RegExpMatchArray | null => {
        return value.match(/[+/*\-.]/)
    }

    const handleClearClick = (): void => {
        setCalculator({ result: 0, input: "" })
    }

    const handleEqualClick = (): void => {
        const res = evaluate(calculator.input)

        setCalculator({
            input: '',
            result: res
        })
    }

    const inputStartsWithOperator = (input: string):boolean => {
        const firstChar = input.charAt(0)
        return firstChar === '+' || firstChar === '-' || firstChar === '*' || firstChar === '/'
    }

    const inputEndsWithOperator = (input: string):boolean => {
        const lastChar = input.charAt(input.length - 1)
        return lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'
    }

    function backspace():void {
        setCalculator({ ...calculator, input: calculator.input.slice(0, -1) })
    }
    const [equalIsDisabled, setEqualIsDisabled] = useState<boolean>(false)

    useEffect(() => {
        const input = calculator.input
        setEqualIsDisabled(inputStartsWithOperator(input) || inputEndsWithOperator(input))
    }, [calculator.input])

    return (
        <section className="buttons">
            <button className="clear-button blue" onClick={() => handleClearClick()}>C</button>
            <button onClick={() => backspace()}>&#8592;</button>

            <button onClick={() => handleNumClick(7)}>7</button>
            <button onClick={() => handleNumClick(8)}>8</button>
            <button onClick={() => handleNumClick(9)}>9</button>
            <button onClick={() => handleNumClick("/")}>/</button>

            <button onClick={() => handleNumClick(4)}>4</button>
            <button onClick={() => handleNumClick(5)}>5</button>
            <button onClick={() => handleNumClick(6)}>6</button>
            <button onClick={() => handleNumClick("*")}>x</button>

            <button onClick={() => handleNumClick(1)}>1</button>
            <button onClick={() => handleNumClick(2)}>2</button>
            <button onClick={() => handleNumClick(3)}>3</button>
            <button onClick={() => handleNumClick("-")}>-</button>

            <button onClick={() => handleNumClick(0)}>0</button>
            <button onClick={() => handleNumClick(".")}>.</button>
            <button 
                onClick={() => handleEqualClick()}
                disabled={equalIsDisabled}
                className="blue"
            >
                =
            </button>
            <button onClick={() => handleNumClick("+")}>+</button>
        </section>
    )
}