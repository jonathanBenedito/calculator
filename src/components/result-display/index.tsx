import './style.css'

interface IResultDisplayProps {
    input: string
    result: number
}

export const ResultDisplay: React.FC<IResultDisplayProps> = ({ input, result }) => {
    return(
        <section className="result-display">
            <input className="formula-input" type="text" value={input} />
            <input className="result-input" type="text" value={result} />
        </section>
    )
}