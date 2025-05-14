import { createContext, useContext, useState } from "react";

interface LoginContextType {
    openLoginModal: Boolean,
    toggleLogin: () => void
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [openLoginModal, setOpenLoginModal] = useState<Boolean>(false);

    const toggleLogin = () => {
        setOpenLoginModal(!openLoginModal);
    }

    return (
        <LoginContext.Provider value={{ openLoginModal, toggleLogin }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};