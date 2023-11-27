import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAxiosAuth } from "../hooks/useAxios";

type User = {
  email: string;
  name?: string;
  surname?: string;
  accountType: string;
  password: string;
  country: string;
  phoneNumber: string;
  accountNumber: string;
  accountBalance: number;
  beneficiaries: string[];
  dateOfBirth: {
    month?: string;
    day?: string;
    year?: string;
  };
  city?: string;
  homeAddress?: string;
  postalCode?: string;
  BVN?: string;
  PIN: string;
};

type UserContextType = {
  user: User | null;
  getUser: () => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const { fetchData } = useAxiosAuth("/users");

  const getUser = async () => {
    const userData: User = await fetchData();
    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, []);

  const contextValue: UserContextType = {
    user,
    getUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
