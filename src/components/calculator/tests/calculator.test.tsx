import { render, screen, fireEvent } from "@testing-library/react"
import { Buttons } from "../../buttons";

describe('Buttons component', () => {
    const setCalculator = jest.fn();
    const calculator = { result: 0, input: '2+2' }
    const setup = () => render(<Buttons {...{ calculator, setCalculator }} />)

    test('Should render all the buttons correctly', () => {
        setup();

        expect(screen.getByRole('button', { name: 'C' })).toBeInTheDocument();

        expect(screen.getByRole('button', { name: '7' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '8' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '9' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '/'})).toBeInTheDocument();

        expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '5' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '6' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'x' })).toBeInTheDocument();

        expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();

        expect(screen.getByRole('button', { name: '0' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '.' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '=' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    })

    test('Should display the correct input when a number button is clicked', () => {
        setup();

        const button_1 = screen.getByRole('button', { name: '1' });
        fireEvent.click(button_1);

        expect(setCalculator).toHaveBeenCalledWith({ result: 0, input: '2+21' });
    })

    test('Should not register the input when a operator button is clicked with empty input', () => {
        render(<Buttons calculator={{ result: 0, input: '' }} {...{ setCalculator }} />);

        const button_plus = screen.getByRole('button', { name: '+' });
        fireEvent.click(button_plus);

        expect(setCalculator).toHaveBeenCalledWith({ result: 0, input: '' });
    })

    test('When the clear button is clicked, the input field of the calculator should be cleared', () => {
        setup();

        const clearButton = screen.getByRole('button', { name: 'C' });
        fireEvent.click(clearButton);

        expect(setCalculator).toHaveBeenCalledWith({ result: 0, input: '' });
    })

    test('Should calculate the expression correctly', () => {
        setup();
        
        const equalButton = screen.getByRole('button', { name: '=' });
        fireEvent.click(equalButton);

        expect(setCalculator).toHaveBeenCalledWith({result: 4, input: ''})
    })

    test('Should not calculate if the input ends with any operator', () => {
        render(<Buttons calculator={{ result: 0, input: '2+' }} {...{ setCalculator }} />);

        const equalButton = screen.getByRole('button', { name: '=' });
        fireEvent.click(equalButton);

        expect(setCalculator).not.toHaveBeenCalled();
    })
})

