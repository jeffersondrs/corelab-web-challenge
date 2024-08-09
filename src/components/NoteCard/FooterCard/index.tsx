import React from 'react';
import Image from 'next/image';
import { MdOutlineClose } from 'react-icons/md';

type FooterProps = {
  toggleDropdown: () => void;
  editNote: () => void;
};

export default function Footer({ toggleDropdown, editNote }: FooterProps) {
  return (
    <footer className="flex flex-row pl-5 pb-2 items-center justify-center">
      <div className="flex flex-row w-full rounded-full">
        <button
          onClick={editNote}
          className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
        >
          <Image src="/Pen.png" alt="Edit Note" width={17} height={17} />
        </button>
        <button
          onClick={toggleDropdown}
          className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
        >
          <Image src="/Fill.png" alt="Change Color" width={18} height={17} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <MdOutlineClose color="#51646E" size={17} />
      </div>
    </footer>
  );
}
