import React, { useEffect, useState } from 'react';
import Colors from './Colors';
import Footer from './FooterCard';
import Header from './HeaderCard';
import { TextArea } from '../index';
import { NoteCardProps } from '@/types/global';
import { useColorChange } from '@/hooks/userColorChanger';
import noteStore from '@/utils/stores/NoteStore';
import { MdOutlineStar, MdOutlineStarBorderPurple500 } from 'react-icons/md';

export default function NoteCard({
  id,
  title,
  description,
  colorNote,
  isFavorite,
  colors,
}: NoteCardProps) {
  const [isFavoriteNote, setIsFavoriteNote] = useState<boolean>(isFavorite);
  const { isDropdownOpen, selectedColor, toggleDropdown, handleColorChange } =
    useColorChange(colorNote[0]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setIsFavoriteNote(isFavorite);
  }, [isFavorite]);

  const toggleFavorite = () => {
    noteStore.toggleFavorite(id);
  };

  const handleDeleteNote = () => {
    noteStore.deleteNote(id);
  };

  const handleChangeTitleNote = (title: string) => {
    noteStore.updateNote(id, title, description, selectedColor);
  };

  const handleIsEditing = () => {
    setIsEditing((prev) => !prev);
    console.log(isEditing ? 'Editing' : 'Not Editing');
  };

  return (
    <div
      className="shadow-md rounded-3xl max-w-96 w-full transition-colors duration-300 relative h-96 md:mx-6 mb-8"
      style={{ backgroundColor: selectedColor }}
    >
      {isEditing ? (
        <Header
          title={title}
          isFavoriteNote={isFavoriteNote}
          setIsFavoriteNote={() => toggleFavorite()}
          onChangeTitle={handleChangeTitleNote}
        />
      ) : (
        <div className="flex flex-row justify-between items-center w-full pl-5 pr-4 py-2 shadow-sm rounded-t-3xl shadow-[#00000015]">
          <h1 className="text-[#455A64] w-full  placeholder-[#9A9A9A] text-sm leading-4 font-bold bg-transparent  my-1">
            {title}
          </h1>
          <button
            className="relative cursor-pointer rounded-full w-6 h-6 flex justify-center items-center"
            onClick={() => toggleFavorite()}
            aria-label="Favorite Note"
          >
            {isFavoriteNote && (
              <MdOutlineStar color="#FFA000" size={20} className="absolute" />
            )}

            <MdOutlineStarBorderPurple500
              color="#455A64"
              size={20}
              className="absolute z-10"
            />
          </button>
        </div>
      )}
      <section className="w-full px-4 py-2 max-h-[310px] h-full">
        {isEditing ? (
          <TextArea
            value={description}
            placeholder="Criar nota..."
            onChange={(e) => noteStore.updateNote(id, title, e, selectedColor)}
            autoResizeTextarea={true}
            maxTextareaHeight={310}
          />
        ) : (
          <p className="text-sm text-gray-700 overflow-ellipsis overflow-hidden h-20">
            {description}
          </p>
        )}
      </section>
      <div className="flex flex-col justify-center items-center relative md:w-[34rem] z-50">
        {isDropdownOpen && (
          <div className="grid grid-rows-2 grid-cols-6 rounded-lg border items-center justify-center p-2 bg-white gap-2 absolute translate-y-[75px] md:translate-y-[52px] shadow-md md:grid-rows-1 md:w-full md:grid-flow-col md:translate-x-10">
            {colors.map((color) => (
              <Colors
                key={color}
                color={color}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        )}
      </div>
      <Footer
        toggleDropdown={toggleDropdown}
        editNote={handleIsEditing}
        deleteNote={handleDeleteNote}
        isEditing={isEditing}
      />
    </div>
  );
}
