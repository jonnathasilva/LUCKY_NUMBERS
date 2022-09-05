import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../utils/api";

interface AppContextInterface {
  loteria: Loterias[];
  loteriasConcursos: LoteriasConcursos[];
  concurso: ConcursosID;
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

interface ConcursosID {
  id: string;
  loteria: number;
  numeros: string[];
  data: string;
}

export const Context = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export function APIProvider({ children }: ContextType) {
  const [loteria, setLoterias] = useState<Loterias[]>([]);
  const [loteriasConcursos, setLoteriasConcursos] = useState<
    LoteriasConcursos[]
  >([]);
  const [concurso, setConcurso] = useState<ConcursosID>({} as ConcursosID);

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

  async function GetLoteriasById(loteriaIdParams: number) {
    console.log(loteriaIdParams);
    const _id = await loteriasConcursos.find(
      (e) => e.loteriaId === loteriaIdParams
    );
    const { data } = await api.get(`/concursos/${_id?.concursoId}`);

    try {
      setConcurso(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetLoterias();
    GetLoteriasConcursos();
  }, []);

  return (
    <Context.Provider
      value={{ loteria, GetLoteriasById, loteriasConcursos, concurso }}
    >
      {children}
    </Context.Provider>
  );
}
