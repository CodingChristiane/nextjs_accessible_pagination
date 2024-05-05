import "./pagination.css"

export default function Pagination(props: { itemsPerPage: number; itemsTotal: number; pageIndex: number; gotToPage: (page: number) => void }) {
    const { itemsPerPage, itemsTotal, pageIndex, gotToPage } = props
    const numPages = itemsTotal / itemsPerPage

    const getOptions = () => {
        let options = []
        for (let page = 1; page <= numPages; page++) {
            options.push(<option key={page} value={page}>Seite {page} von {numPages}</option>)
        }
        return options
    }

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        gotToPage(Number(event.target.value))
    } 

    return (
        <nav className="page-nav" aria-label="Seitennavigation">
            <button disabled={pageIndex === 1} onClick={() => { gotToPage(1) }}>Erste Seite</button>
            <button disabled={pageIndex === 1} onClick={() => { gotToPage(pageIndex - 1) }}>Vorherige Seite</button>
            <label htmlFor="page-select">Gehe zu Seite</label>
            <select onChange={onSelect} id="page-select" value={pageIndex}>
                {getOptions()}
            </select>
            <button disabled={pageIndex === numPages} onClick={() => { gotToPage(pageIndex + 1) }}>Nächste Seite</button>
            <button disabled={pageIndex === numPages} onClick={() => { gotToPage(numPages) }}>Letzte Seite</button>
        </nav>
    )
}
