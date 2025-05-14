import { createContext, useContext, useState } from "react";
import type { JobType } from "../types/JobType";

interface DetailContextType {
    openDetailModal: Boolean,
    toggleDetail: (job: JobType | undefined) => void,
    j: JobType | undefined
}

const DetailContext = createContext<DetailContextType | undefined>(undefined);

export const DetailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [openDetailModal, setOpenDetailModal] = useState<Boolean>(false);
    const [j, setJ] = useState<JobType>();

    const toggleDetail = (job?: JobType | undefined) => {
        if(openDetailModal === false){
            setJ(() => job)
        }
        setOpenDetailModal(!openDetailModal);
    }

    return (
        <DetailContext.Provider value={{ openDetailModal, toggleDetail, j }}>
            {children}
        </DetailContext.Provider>
    )
}

export const useDetail = (): DetailContextType => {
  const context = useContext(DetailContext);
  if (!context) {
    throw new Error('useDetail must be used within a DetailProvider');
  }
  return context;
};