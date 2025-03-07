import SnakeGame from "./games/snake/SnakeGame";
import { useState } from "react";

function GameModal({ scale }: any) {
  return (
    <div
      className={`w-[800px] h-full p-2 absolute scale-${scale} z-10 transition duration-200`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="w-full h-full flex flex-col items-center gap-6 bg-white shadow-2xl rounded-3xl p-4">
        <h1 className="text-4xl">Snake Game</h1>
        <SnakeGame />
      </div>
    </div>
  );
}

export default GameModal;
