import React, { useState, useRef } from 'react';
import { Header } from '../index';

type ColorNote =
  | '#FFFFFF'
  | '#BAE2FF'
  | '#B9FFDD'
  | '#FFE8AC'
  | '#FFCAB9'
  | '#F99494'
  | '#9DD6FF'
  | '#ECA1FF'
  | '#DAFF8B'
  | '#FFA285'
  | '#CDCDCD'
  | '#979797'
  | '#A99A7C';

type NoteCardProps = {
  title: string;
  description: string;
  isFavorite: boolean;
  onFavorite: () => void;
  editNote: () => void;
  deleteNote: () => void;
  colorNote: ColorNote[];
};

export default function CreateNote({
  title,
  description,
  editNote,
  deleteNote,
  colorNote,
}: NoteCardProps) {
  const [isFavoriteNote, setIsFavoriteNote] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const maxTextareaHeight = 200;

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(
        textareaRef.current.scrollHeight,
        maxTextareaHeight
      );
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  return (
    <div className="shadow-md rounded-3xl md:rounded-[3px] max-w-96 md:max-w-[531px] transition-colors duration-300 relative mx-12 mb-2 w-full bg-white">
      <Header
        title={title}
        isFavoriteNote={isFavoriteNote}
        setIsFavoriteNote={setIsFavoriteNote}
      />
      <div className='px-4 py-3'>
        <textarea
          ref={textareaRef}
          className="w-full outline-none bg-transparent resize-none text-sm placeholder-[#50656E] text-gray-950"
          placeholder="Criar nota..."
          rows={1}
          onInput={autoResizeTextarea}
          style={{ maxHeight: `${maxTextareaHeight}px` }}
        />
      </div>
    </div>
  );
}
