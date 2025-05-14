import type { JobType } from '../../types/JobType'
import { useDetail } from '../../context/DetailContext'

export default function JobCard(props: {job: JobType}) {
    const { job } = props
    const { toggleDetail } = useDetail();

    return (
        <div className="w-100 rounded overflow-hidden border-2 border-black dark:border-white" onClick={() => toggleDetail(job)}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{job.company}</div>
                <p className="text-black dark:text-white">
                    {job.description}
                </p>
                <p className="text-black dark:text-white">
                    {job.step}
                </p>
            </div>
        </div>
    )
}
