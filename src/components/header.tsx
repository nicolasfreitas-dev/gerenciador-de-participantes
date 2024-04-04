import nlwUniteIcon from "../assets/nlw-unite-icon.svg"

export function Header() {
    return (
    <div className="flex itens-center gap-5 py-8">
        <img src={nlwUniteIcon} />

        <nav className="flex items-center gap-5">
            <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
            <a href="" className="font-medium text-sm">Participantes</a>

        </nav>
    </div>
    )
}