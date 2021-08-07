import React, { createContext, ReactNode, useContext } from "react";
import RootStore from "./root.store";

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

export function usePlanetStore() {
  const { planetStore } = useRootStore();
  return planetStore;
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const root = store ?? new RootStore();
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}
