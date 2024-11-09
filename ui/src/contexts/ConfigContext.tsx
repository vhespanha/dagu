import { createContext, useContext } from 'react';

export type Config = {
  apiURL: string;
  title: string;
  navbarColor: string;
  tz: string;
  version: string;
};

export const ConfigContext = createContext<Config>(null!);

export function useConfig() {
  return useContext(ConfigContext);
}
