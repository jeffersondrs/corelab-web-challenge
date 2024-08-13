import React from 'react';
import { MdOutlineStar, MdOutlineStarBorderPurple500 } from 'react-icons/md';
import { HeaderProps } from '@/types/global';

export default function Header({
  title,
  isFavoriteNote,
  setIsFavoriteNote,
  onChangeTitle,
}: HeaderProps) {
  return (
    <header className="flex flex-row justify-between items-center w-full pl-5 pr-3 py-2 shadow-sm rounded-t-3xl shadow-[#00000015]">
      <input
        type="text"
        value={title}
        className="text-[#455A64] w-full  placeholder-[#9A9A9A] text-[14.2px] leading-4 h-7 font-bold outline-none bg-transparent"
        placeholder="Título"
        onChange={(e) => onChangeTitle?.(e.target.value)}
      />
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
