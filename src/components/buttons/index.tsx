import { IState as Props } from "../calculator";
import { evaluate } from 'mathjs';

interface IButtonProps {
    calculator: Props["calculator"],
    setCalculator: React.Dispatch<React.SetStateAction<Props["calculator"]>>
}

export const Buttons: React.FC<IButtonProps> = ({ calculator, setCalculator }) => {

    const handleNumClick = (num: number | string) => {
        setCalculator({ ...calculator, input: calculator.input + num })
    }

    const handleClearClick = (): void => {
        setCalculator({ ...calculator, input: "" })
    }

    const handleEqualClick = (): void => {
        const res = evaluate(calculator.input);

        setCalculator({
            input: "",
            result: res
        })
    }

    return (
        <section className="buttons">
            <button onClick={() => handleClearClick()}>Clear</button>
            <br />
            <button onClick={() => handleNumClick(7)}>7</button>
            <button onClick={() => handleNumClick(8)}>8</button>
            <button onClick={() => handleNumClick(9)}>9</button>
            <button onClick={() => handleNumClick("/")}>/</button>
            <br />
            <button onClick={() => handleNumClick(4)}>4</button>
            <button onClick={() => handleNumClick(5)}>5</button>
            <button onClick={() => handleNumClick(6)}>6</button>
            <button onClick={() => handleNumClick("*")}>*</button>
            <br />
            <button onClick={() => handleNumClick(1)}>1</button>
            <button onClick={() => handleNumClick(2)}>2</button>
            <button onClick={() => handleNumClick(3)}>3</button>
            <button onClick={() => handleNumClick("-")}>-</button>
            <br />
            <button onClick={() => handleNumClick(0)}>0</button>
            <button onClick={() => handleNumClick(".")}>.</button>
            <button onClick={() => handleEqualClick()}>=</button>
            <button onClick={() => handleNumClick("+")}>+</button>
        </section>
    )
}