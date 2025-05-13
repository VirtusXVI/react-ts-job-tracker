import React, { useState } from 'react'

export default function ColorToggleButton(props: {filter: String, applyFilter: (filter: String) => void, appliedFilters: String[]}) {
    const { filter, applyFilter, appliedFilters } = props
    const [isClicked, setIsClicked] = useState(false);

    useState(() => {
        if(appliedFilters.find((f) => f === filter)){
            setIsClicked(true);
        }
    })

    const manageClick = (filter: String) => {
        applyFilter(filter);
        setIsClicked(!isClicked);
    }

    return (
        <button type="button" onClick={() => manageClick(filter)} className={`mt-3 inline-flex w-full justify-center rounded-md dark:text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset ${isClicked ? 'bg-blue-400' : 'bg-white dark:bg-black'}`}>
            {  filter }
        </button>
    )
}
