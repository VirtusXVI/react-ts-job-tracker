import { useDetail } from "../../context/DetailContext";
import { useState } from "react";

export default function AddNewJob(props: {type: String}) {
    const { type } = props
    const { toggleDetail, j } = useDetail();
    const [company, setCompany] = useState<string | undefined>(j?.company)
    const [description, setDescription] = useState<string | undefined>(j?.description)
    const [step, setStep] = useState<string | undefined | null>(null)

    return (
        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-black dark:text-white text-left shadow-xl transition-all sm:my-8">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 px-8">
                        <h3 className="text-base font-semibold" id="modal-title">
                            { type }
                        </h3>
                        <div className="mt-2">
                            <form className="rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">
                                        {j?.company}
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setCompany(e.target.value)} id="username" type="text" placeholder="Username" value={company}/>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">
                                        {j?.description}
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Description" type="text" value={description}/>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">
                                        Step
                                    </label>
                                    <select name="step" id="step" defaultValue={j?.step} onChange={(e) => setStep(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                                        <option value="Sent Resume">Sent Resume</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>

                                <div className="py-3 flex flex-col gap-3 sm:flex sm:flex-row sm:justify-end">
                                    <button type="button" onClick={() => toggleDetail(j)} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:w-auto">
                                        Cancel
                                    </button>
                                    <button type="submit" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:w-auto">
                                        Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}