import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../utils/api";

interface AppContextInterface {
  loteria: Loterias[];
  loteriasConcursos: LoteriasConcursos[];
  GetLoteriasById: (loteriaId: number) => void;
}

interface ContextType {
  children: ReactNode;
}

interface Loterias {
  nome: string;
  id: number;
}

interface LoteriasConcursos {
  concursoId: string;
  loteriaId: number;
}

export const Context = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export function APIProvider({ children }: ContextType) {
  const [loteria, setLoterias] = useState<Loterias[]>([]);
  const [loteriasConcursos, setLoteriasConcursos] = useState<
    LoteriasConcursos[]
  >([]);

  async function GetLoterias() {
    const { data } = await api.get("/loterias");

    try {
      setLoterias(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetLoteriasConcursos() {
    const { data } = await api.get("/loterias-concursos");

    try {
      setLoteriasConcursos(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetLoteriasById(loteriaId: number) {
    const { data } = await api.get(`/concursos/${loteriaId}`);

    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetLoterias();
    GetLoteriasConcursos();
  }, []);

  return (
    <Context.Provider value={{ loteria, GetLoteriasById, loteriasConcursos }}>
      {children}
    </Context.Provider>
  );
}
