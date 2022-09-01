import { useState, useContext, ChangeEvent } from "react";
import { Context } from "../context/APIContext";
import LogoSena from "../imgs/Logo_Sena.png";
import "./Home.css";

function Home() {
  const { loteria, GetLoteriasById, loteriasConcursos } = useContext(Context);

  function handleChang(e: ChangeEvent<HTMLInputElement>) {
    GetLoteriasById(parseInt(e.target.value));
  }

  return (
    <div className="container">
      <section className="loteria" onChange={handleChang}>
        <select name="" id="">
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
      <section className="luckyNumber">a</section>
    </div>
  );
}

export default Home;
