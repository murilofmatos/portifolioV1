import React from "react";

function GameModal({ modalScale }: any) {
  return (
    <div
      className={`w-[800px] h-full p-2 absolute scale-${modalScale} z-10 transition duration-200`}
    >
      <div className="w-full h-full bg-white shadow-2xl rounded-3xl">
        <h1>Snake Game</h1>
      </div>
    </div>
  );
}

export default GameModal;
