import FilterModal from "./FilterModal";
import JobDesctiptionDetail from "./JobDesctiptionDetail";
import LoginModal from "./LoginModal";
import AddNewJob from "./AddNewJob";

type ModalProps = {
  type: string;
  appliedFilters?: String[];
  setAppliedFilters?: React.Dispatch<React.SetStateAction<String[]>>;
  setOpenFilters?: React.Dispatch<React.SetStateAction<Boolean>>;
};

export default function Modal(props: ModalProps) {
    const { type, appliedFilters, setAppliedFilters, setOpenFilters } = props;

    const functionBody = () => {

        switch (type) {
            case 'Filter':
                return <FilterModal type='Filter' appliedFilters={appliedFilters ?? []} setOpenFilters={setOpenFilters ?? (() => {})} setAppliedFilters={setAppliedFilters ?? (() => {})}/>
            break;
            case 'Login':
                return <LoginModal type='Login'/>;
            break;
            case 'Detail':
                return <JobDesctiptionDetail type='Detail'/>;
            break;
            case 'Add':
                return <AddNewJob type='Add'/>;
            break;
        }
    };


    return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                {functionBody()}
            </div>
        </div>
    </div>
    )
}
