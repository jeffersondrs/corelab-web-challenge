import React from 'react';
import Image from 'next/image';
import { MdOutlineStar, MdOutlineStarBorderPurple500 } from 'react-icons/md';

type HeaderProps = {
  title: string;
  isFavoriteNote: boolean;
  setIsFavoriteNote: (isFavorite: boolean) => void;
};

export default function Header({ title, isFavoriteNote, setIsFavoriteNote }: HeaderProps) {
  return (
    <header className="flex flex-row justify-between items-center w-full pl-5 pr-3 py-2 shadow-sm rounded-t-3xl shadow-[#00000015]">
      <h3 className="text-[#455A64] text-[14.2px] leading-4 font-bold">
        {title}
      </h3>
      <div
        className="relative cursor-pointer rounded-full w-6 h-6 flex justify-center items-center"
        onClick={() => setIsFavoriteNote(!isFavoriteNote)}
      >
        {isFavoriteNote && (
          <MdOutlineStar color="#FFA000" size={20} className="absolute" />
        )}

        <MdOutlineStarBorderPurple500
          color="#455A64"
          size={20}
          className="absolute z-10"
        />
      </div>
    </header>
  );
}
