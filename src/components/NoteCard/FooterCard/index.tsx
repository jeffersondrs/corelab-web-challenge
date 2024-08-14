import React from 'react';
import Image from 'next/image';
import {
  MdOutlineClose,
  MdOutlineAdd,
  MdOutlineFileDownloadDone,
} from 'react-icons/md';

type FooterProps = {
  toggleDropdown: () => void;
  editNote?: () => void;
  addNote?: () => void;
  deleteNote?: () => void;
  isEditing?: boolean;
};

export default function Footer({
  toggleDropdown,
  editNote,
  addNote,
  deleteNote,
  isEditing,
}: FooterProps) {
  return (
    <footer className="flex flex-row pl-5 pb-2 items-center justify-center">
      <div className="flex flex-row w-full rounded-full">
        {addNote ? (
          <button
            onClick={addNote}
            className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
            aria-label="Add Note"
          >
            <MdOutlineAdd color="#51646E" size={20} />
          </button>
        ) : (
          <button
            onClick={editNote}
            className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
            aria-label="Edit Note"
          >
            {isEditing ? (
              <MdOutlineFileDownloadDone color="#51646E" size={20} />
            ) : (
              <Image src="/Pen.png" alt="Edit Note" width={20} height={20} />
            )}
          </button>
        )}
        <button
          onClick={toggleDropdown}
          className="flex flex-row gap-2 items-center justify-center hover:bg-[#FFE8AC] rounded-full p-1 transform transition-transform duration-300 cursor-pointer"
          aria-label="Change Color"
        >
          <Image src="/Fill.png" alt="Change Color" width={20} height={19} />
        </button>
      </div>
      <button
        onClick={deleteNote}
        className="flex flex-col justify-center items-center mr-4 rounded-full cursor-pointer"
        aria-label="Delete Note"
      >
        <MdOutlineClose color="#51646E" size={17} />
      </button>
    </footer>
  );
}
