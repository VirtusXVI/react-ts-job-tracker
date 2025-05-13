import ColorToggleButton from "./ColorToggleButton";


export default function Modal(props: { type:String, appliedFilters: String[], setAppliedFilters: React.Dispatch<React.SetStateAction<String[]>>, setOpenFilters: React.Dispatch<React.SetStateAction<Boolean>> }) {
    const { type, appliedFilters, setAppliedFilters, setOpenFilters } = props;
    const filters: String[] = ["Sent Resume", "Interview", "Rejected"];

    const functionBody = () => {
        switch (type) {
            case 'Filter':
                return filters.map((filter, index) => {
                    return <ColorToggleButton filter={filter} applyFilter={applyFilter} appliedFilters={appliedFilters} key={index}/>
                })
            break;
        }
    };

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
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-black dark:text-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-base font-semibold" id="modal-title">
                                    { type }
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        { functionBody() }
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
        </div>
    </div>
    )
}
