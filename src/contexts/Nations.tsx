import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Country {
  name: {
    common: string;
  };
  alpha2Code: string;
  alpha3Code: string;
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  subregion: string;
  population: number;
  currencies: Currency[];
  languages: Language[];
}

const NationContext = createContext<Country[]>([]);

export const useNationContext = () => {
  return useContext(NationContext);
};

export const NationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <NationContext.Provider value={countries}>
      {children}
    </NationContext.Provider>
  );
};
