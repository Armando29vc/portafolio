import { createContext } from 'react';

type Tema = 'dark' | 'light' | 'system';

interface TemaContextType {
  tema: Tema;
  setTema: (tema: Tema) => void;
}

export const TemaContext = createContext<TemaContextType | null>(null);
