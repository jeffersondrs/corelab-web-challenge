import React, { useState } from 'react';
import Color from './Colors';
import Footer from './FooterCard';
import Header from './HeaderCard';

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

export default function NoteCard({
  title,
  description,
  editNote,
  deleteNote,
  colorNote,
}: NoteCardProps) {
  const [selectedColor, setSelectedColor] = useState<ColorNote>('#FFFFFF');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFavoriteNote, setIsFavoriteNote] = useState<boolean>(false);

  const handleColorChange = (color: ColorNote) => {
    setSelectedColor(color);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="shadow-md rounded-3xl max-w-96 transition-colors duration-300 relative h-96 mx-12 mb-12 md:mx-6"
      style={{ backgroundColor: selectedColor }}
    >
      <Header
        title={title}
        isFavoriteNote={isFavoriteNote}
        setIsFavoriteNote={setIsFavoriteNote}
      />
      <section className="w-full px-4 max-h-[310px] h-full">
        <p className="text-[#455A64] text-xs h-full font-normal py-1">
          {description}
        </p>
      </section>
      <div className="flex flex-col justify-center items-center relative md:w-[34rem] z-50">
        {isDropdownOpen && (
          <div className="grid grid-rows-2 grid-cols-6 rounded-lg border items-center justify-center p-2 bg-white gap-2 absolute translate-y-[75px] md:translate-y-[52px] shadow-md md:grid-rows-1 md:w-full md:grid-flow-col md:translate-x-10">
            {colorNote
              .filter((color) => color !== '#FFFFFF')
              .map((color) => (
                <Color
                  key={color}
                  color={color}
                  onClick={() => handleColorChange(color)}
                />
              ))}
          </div>
        )}
      </div>
      <Footer toggleDropdown={toggleDropdown} editNote={editNote} />
    </div>
  );
}
