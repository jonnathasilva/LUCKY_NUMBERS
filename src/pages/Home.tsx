import { useState, useContext } from "react";
import { Context } from "../context/APIContext";

function Home() {
  const { loteria, GetLoteriasById } = useContext(Context);
  GetLoteriasById(2167);

  return <h1>a</h1>;
}

export default Home;
