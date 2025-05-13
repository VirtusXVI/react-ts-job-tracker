import React from 'react'
import ColorToggleButton from '../body/ColorToggleButton'

export default function FilterModal(props: {type: String, appliedFilters: String[], setOpenFilters: React.Dispatch<React.SetStateAction<Boolean>>, setAppliedFilters: React.Dispatch<React.SetStateAction<String[]>>}) {
    const {type, appliedFilters, setOpenFilters, setAppliedFilters} = props
    const filters: String[] = ["Sent Resume", "Interview", "Rejected"];

    const applyFilter = (filter: String) => {
        const updatedFilters = appliedFilters;
        const check = updatedFilters.findIndex((e) => e === filter);


        if(check !== -1){
            setAppliedFilters(updatedFilters.filter((e) => e !== filter));
        }
        else{
            updatedFilters.push(filter);
            setAppliedFilters(updatedFilters);
        }
    }

    return (
        <div>
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-black dark:text-white text-left shadow-xl transition-all sm:my-8">
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-base font-semibold" id="modal-title">
                                { type }
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    { filters.map((filter, index) => {
                                        return <ColorToggleButton filter={filter} applyFilter={applyFilter} appliedFilters={appliedFilters} key={index}/>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button onClick={() => setOpenFilters(false)} type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto">
                        { type }
                    </button>
                </div>
            </div>
        </div>
    )
}
