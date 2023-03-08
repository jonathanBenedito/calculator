import "./style.css"

export const Header: React.FC = () => {
    return (
        <header className="calculator-header">
            <section className="calculator-brand">
                <h1 className="model">KK-403</h1>
                <p className="object">DIGITAL CALCULATOR</p>
            </section>
            <img src={'images/solar-panel.png'} alt={'solar-panel'} />
        </header>
    )
}