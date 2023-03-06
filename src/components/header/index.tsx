interface IHeaderProps {
    input: string
}

export const Header: React.FC<IHeaderProps> = ({ input }) => {
    return (
        <header>
            <section className="calculator-brand">
                <h1 className="brand">SOLIDER</h1>
                <p className="calculator-text">CALCULATOR</p>
            </section>
            <input type="text" value={input} />
        </header>
    )
}