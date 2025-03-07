"use client";
import WarningTape from "./components/WarningTape";
import GameCard from "./components/GameCard";
import { Poppins, Fredoka } from "next/font/google";
import GameModal from "./components/GameModal";
import { useState, useEffect } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });
const fredoka = Fredoka({ subsets: ["latin"], weight: "500" });

export default function Home() {
  const [modalScale, setModalScale] = useState(0);
  function openModal() {
    setModalScale(1);
  }
  function closeModal() {
    setModalScale(0);
  }

  return (
    <>
      <WarningTape />
      <div className="h-full relative max-w-[800px] mx-auto">
        <main className={`mb-auto flex flex-col ${poppins.className}`}>
          <h1
            className={`font-bold text-3xl mx-auto my-4 ${fredoka.className}`}
          >
            ⚠️ ATENÇÃO ⚠️
          </h1>
          <p className="p-2">
            Essa página ainda está em construção! Tome cuidado para não esbarrar
            em nada e aguarde até que ela se torne algo incrível! <br />
            Enquanto isso, que tal jogar um joguinho para passar o tempo?
            Divirta-se!
          </p>
          <div className="grid grid-cols-3 gap-8 w-[75%] mx-auto mt-5">
            <GameCard
              imgSrc={"https://github.com/murilofmatos.png"}
              onClick={openModal}
            />
            <GameCard
              imgSrc={"https://github.com/murilofmatos.png"}
              onClick={openModal}
            />
            <GameCard
              imgSrc={"https://github.com/murilofmatos.png"}
              onClick={openModal}
            />
          </div>
          <GameModal scale={modalScale} />
        </main>
      </div>
      <div
        className={`w-full h-full absolute`}
        style={{ transform: `scale(${modalScale})` }}
        onClick={closeModal}
      ></div>
      <WarningTape />
    </>
  );
}
