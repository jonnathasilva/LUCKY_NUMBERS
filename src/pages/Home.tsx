import { useContext, ChangeEvent, useEffect } from "react";
import { Context } from "../context/APIContext";
import LogoSena from "../imgs/Logo_Sena.png";
import "./Home.css";

function Home() {
  const { loteria, GetLoteriasById, concurso } = useContext(Context);

  function handleChang(e: ChangeEvent<HTMLSelectElement>) {
    console.log(parseInt(e.target.value));
    GetLoteriasById(parseInt(e.target.value));
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
