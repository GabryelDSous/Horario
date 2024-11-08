import React from "react";
import Horario from "./componetes/estilo.css"
export default function App(){
  return(
    <main>
      <section>
        <p>{new Date().toLocaleTimeString()}</p>
      </section>
    </main>
  )
}