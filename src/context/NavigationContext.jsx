import { createContext, useContext } from "react";

export const NavigationContext = createContext(null);

export function useNavigation() {
  return useContext(NavigationContext);
}

