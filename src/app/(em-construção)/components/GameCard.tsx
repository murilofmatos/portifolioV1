"use client";
import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";

const imageLoader = ({ src }: any) => {
  return src;
};

type CardProps = {
  imgSrc: string | StaticImport;
  onClick: MouseEventHandler;
};

function GameCard({ imgSrc, onClick }: CardProps) {
  return (
    <div
      className={`flex flex-col shadow-lg shadow-black
        hover:scale-[104%] transition duration-300 hover:shadow-none`}
    >
      <Image
        className="w-full"
        loader={imageLoader}
        src={imgSrc}
        width={144}
        height={144}
        alt="Foto do Murilo"
      ></Image>
      <button
        onClick={onClick}
        className={`font-bold px-3 py-1 bg-amber-300  cursor-pointer 
        hover:bg-amber-400 transition-colors duration-300`}
      >
        JOGAR
      </button>
    </div>
  );
}

export default GameCard;
