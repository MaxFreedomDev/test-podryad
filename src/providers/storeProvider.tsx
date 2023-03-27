import React from 'react';
import rootStore, { RootStore } from '~/store';
import { useLocalObservable } from 'mobx-react-lite';

const storeContext = React.createContext<RootStore | null>(null);

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

export default ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(() => rootStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};
