import { ChildrenProps } from "../types/interface/IProps";

import { createContext, useContext, useEffect, useState } from "react";

interface SearchContextType {
  searchQuery: string;
  handleSetQuery: (queryToSet: string) => void;
}

const defaultContextValue: SearchContextType = {
  searchQuery: "",
  handleSetQuery: () => {},
};

const SearchContext = createContext<SearchContextType>(defaultContextValue);

export const SearchProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSetQuery = (queryToSet: string) => setSearchQuery(queryToSet);

  const contextValue: SearchContextType = {
    searchQuery,
    handleSetQuery,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("useSearchContext must be used within an SearchProvider!");
  }

  return searchContext;
};
