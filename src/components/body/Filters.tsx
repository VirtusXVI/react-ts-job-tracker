
export default function Filters() {

    return (
        <>
            <span className='overflow-x-scroll'>
                {
                    filters.map((filter) => {
                        return (<button className='bg-black dark:bg-white text-white dark:text-black rounded mx-3'>{filter}</button>)
                    })
                }
            </span>
        </>
    )
}
