'use client'

import Pagination from "@/component/pagination.component";
import { useState } from "react";

export default function Catalogue() {
    const itemsPerPage = 5
    const itemsTotal = 25
    const entries = createCatalogue(itemsTotal)

    const generateItems = (page: number) => {
        const start = (page - 1) * itemsPerPage;
        const end = Math.min(page * itemsPerPage, entries.length);
        return entries.slice(start, end)
    }

    let [pageIndex, setPageIndex] = useState<number>(1)
    let [currentItems, setCurrentItems] = useState<{ id: number, title: string, description: string }[]>(generateItems(1))

    const goToPage = (page: number) => {
        setPageIndex(page)
        setCurrentItems(generateItems(page))
    }

    const itemDiv = (item: { id: number, title: string, description: string }) => {
        return <div key={item.id}><h1>{item.title}</h1><span>{item.description}</span></div>
    }

    return (
        <main>
            <h1>Training<br />
                Accessibility und wie wir sie in IT erzielen<br />
                Paginierung
            </h1>
            <div aria-live="polite" className="pagination">
                <Pagination itemsPerPage={itemsPerPage} itemsTotal={itemsTotal} pageIndex={pageIndex} gotToPage={goToPage} />
                <div>
                    {currentItems.map((item) => { return itemDiv(item) })}
                </div>
                <div>Seite {pageIndex} von {itemsTotal / itemsPerPage}</div>
                <Pagination itemsPerPage={itemsPerPage} itemsTotal={itemsTotal} pageIndex={pageIndex} gotToPage={goToPage} />
            </div>
        </main>

    )

}

export const createCatalogue = (number: number) => {
    const catalogue = [];
    for (let i = 1; i <= number; i++) {
        catalogue.push({
            id: i,
            title: "Eintrag " + i,
            description: "Lorem Ipsum " + i
        });
    }
    return catalogue
}
