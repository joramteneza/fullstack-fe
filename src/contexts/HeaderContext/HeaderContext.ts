import { createContext, useContext } from "react";

export interface HeaderContextType {
  isPageSelected?: boolean;
  selectedContainer?: string;
  setIsPageSelected?: (value: boolean) => void;
  setSelectedContainer?: (value: string) => void;
}

const defaultHeaderContext: HeaderContextType = {};

const HeaderContext = createContext<HeaderContextType>(defaultHeaderContext);

export default HeaderContext;

export const useHeaderContext = () => useContext(HeaderContext);
