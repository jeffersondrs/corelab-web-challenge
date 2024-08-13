import React from 'react';
import Image from 'next/image';
import { MdOutlineClose, MdOutlineAdd } from 'react-icons/md';

type FooterProps = {
  toggleDropdown: () => void;
  editNote?: () => void;
  addNote?: () => void;
  deleteNote?: () => void;
};

export default function Footer({
  toggleDropdown,
  editNote,
  addNote,
  deleteNote,
}: FooterProps) {
  return (
    <footer className="flex flex-row pl-5 pb-2 items-center justify-center">
      <div className="flex flex-row w-full rounded-full">
        {addNote ? (
          <button
            onClick={addNote}
            className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
          >
            <MdOutlineAdd color="#51646E" size={20} />
          </button>
        ) : (
          <button
            onClick={editNote}
            className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
          >
            <Image src="/Pen.png" alt="Edit Note" width={20} height={20} />
          </button>
        )}
        <button
          onClick={toggleDropdown}
          className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
        >
          <Image src="/Fill.png" alt="Change Color" width={20} height={19} />
        </button>
      </div>
      <button
        onClick={deleteNote}
        className="flex flex-col justify-center items-center mr-4 rounded-full cursor-pointer"
      >
        <MdOutlineClose color="#51646E" size={17} />
      </button>
    </footer>
  );
}
