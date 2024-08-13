'use client';
import React, { useState, useRef } from 'react';
import { Footer, Colors } from '../index';
import { NoteCardProps } from '@/types/global';
import Header from './Header';
import { maxTextareaHeight } from '@/utils/constants';
import { useColorChange } from '@/hooks/userColorChanger';
import noteStore from '@/utils/stores/NoteStore';
import TextArea from './TextArea';

export default function CreateNote({ colors }: NoteCardProps) {
  const [isFavoriteNote, setIsFavoriteNote] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>('');
  const { handleColorChange, selectedColor, toggleDropdown, isDropdownOpen } =
    useColorChange();

  const handleAddNote = () => {
    noteStore.addNote(titleValue, value, selectedColor, isFavoriteNote);
    setTitleValue('');
    setValue('');
    setIsFavoriteNote(false);
  };

  return (
    <div
      className="shadow-md rounded-3xl md:rounded-[3px] max-w-96 md:max-w-[531px] transition-colors duration-300 relative mx-12 mb-2 w-full bg-white"
      style={{ backgroundColor: selectedColor }}
    >
      <Header
        title={titleValue}
        isFavoriteNote={isFavoriteNote}
        setIsFavoriteNote={setIsFavoriteNote}
        onChangeTitle={setTitleValue}
      />
      <div className="px-4 py-3">
        <TextArea
          onChange={setValue}
          placeholder="Criar nota..."
          textRef={textareaRef}
          value={value}
          autoResizeTextarea={true}
          maxTextareaHeight={maxTextareaHeight}
        />
      </div>
      <div className="flex flex-col justify-center items-center relative md:w-[34rem] z-50">
        {isDropdownOpen && (
          <div className="grid grid-rows-2 grid-cols-6 rounded-lg border items-center justify-center p-2 bg-white gap-2 absolute translate-y-[75px] md:translate-y-[52px] shadow-md md:grid-rows-1 md:w-full md:grid-flow-col md:translate-x-10">
            {colors
              .filter((color) => color !== '#FFFFFF')
              .map((color) => (
                <Colors
                  key={color}
                  color={color}
                  onClick={() => handleColorChange(color)}
                />
              ))}
          </div>
        )}
      </div>
      {value || titleValue ? (
        <Footer toggleDropdown={toggleDropdown} addNote={handleAddNote} />
      ) : null}
    </div>
  );
}
