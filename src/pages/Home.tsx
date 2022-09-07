import { useContext, ChangeEvent, useEffect } from "react";
import { Context } from "../context/APIContext";
import LogoSena from "../imgs/Logo_Sena.png";
import "./Home.css";

interface LoteriasConcursos {
  concursoId: string;
  loteriaId: number;
}

function Home() {
  const { loteria, GetLoteriasById, concurso, loteriasConcursos } =
    useContext(Context);

  async function handleChang(e: ChangeEvent<HTMLSelectElement>) {
    let value = parseInt(e.target.value);
    let _id = await loteriasConcursos.find((e) => e.loteriaId === value);
    GetLoteriasById(_id as LoteriasConcursos);
  }

  return (
    <div className="container">
      <section className="loteria">
        <select name="concursos" onChange={handleChang}>
          {loteria.map((Item) => (
            <option key={Item.id} value={Item.id}>
              {Item.nome}
            </option>
          ))}
        </select>
        <div>
          <img src={LogoSena} alt="Sena" />
        </div>
        <h1>Mega-Sena</h1>
        <p>Concurso Nº 4560</p>
      </section>
      <section className="luckyNumber">
        <ul>
          {concurso?.numeros?.map((Item) => (
            <li key={Item}>{Item}</li>
          ))}
        </ul>
        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </section>
    </div>
  );
}

export default Home;
