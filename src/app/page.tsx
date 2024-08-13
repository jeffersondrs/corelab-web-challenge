'use client';
import { Observer } from 'mobx-react-lite';
import { CreateNote, InputSearch, NoteCard } from '@/components';
import React from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { colors } from '@/utils/constants';
import noteStore from '@/utils/stores/NoteStore';

export default function Home() {
  const [value, search] = React.useState('');

  const filteredNotes = noteStore.searchNotes(value);

  console.log(filteredNotes);

  return (
    <Observer>
      {() => (
        <main className="flex flex-col h-full w-full max-w-[120rem]">
          <header className="flex flex-row justify-between h-14 items-center gap-2 w-full px-3 shadow-[#95959524] shadow-md bg-[#FFFFFF]">
            <div className="flex flex-row w-full gap-10">
              <div className="flex flex-row items-center justify-center gap-1">
                <Image
                  src="/image 8.png"
                  alt="Core Notes"
                  width={29.7}
                  height={29.7}
                />
                <h1 className="text-xs text-[#455A64]">Core Notes</h1>
              </div>
              <InputSearch
                placeholder="Search"
                value={value}
                onChange={(value) => search(value)}
              />
            </div>
            <div className="pointer">
              <IoMdClose color="#51646E" size={16} />
            </div>
          </header>
          <div className="flex w-full items-center justify-center py-7">
            <CreateNote
              id=""
              colorNote={colors}
              colors={colors}
              deleteNote={() => {}}
              editNote={() => {
                console.log('Edit Note');
              }}
              title="Título"
              description="Criar nota..."
              isFavorite={false}
            />
          </div>
          {noteStore.notes.some((note) => note.isFavorite) && (
            <section className="flex flex-col w-full min-h-80">
              <div className="flex flex-row justify-center w-full px-16 md:px-36">
                <p className="w-full text-start text-xs font-normal text-[#464646] mb-1">
                  Favoritas
                </p>
              </div>
              <div className="flex flex-col md:flex-row px-10 md:w-full md:px-20 md:grid md:grid-cols-3 gap-10">
                {noteStore.notes
                  .filter((note) => note.isFavorite)
                  .map((note) => (
                    <NoteCard
                      key={note.id}
                      colorNote={note.colorNote}
                      colors={note.colors}
                      deleteNote={note.deleteNote}
                      description={note.description}
                      editNote={note.editNote}
                      isFavorite={note.isFavorite}
                      title={note.title}
                      id={note.id}
                    />
                  ))}
              </div>
            </section>
          )}
          {noteStore.notes.some((note) => !note.isFavorite) && (
            <section className="flex flex-col w-full pb-5 min-h-20">
              <div className="flex flex-row justify-center w-full px-16 md:px-36">
                <p className="w-full text-start text-xs font-normal text-[#464646] mb-1">
                  Outras
                </p>
              </div>
              <div className="flex flex-col md:flex-row px-10 md:w-full md:px-20 md:grid md:grid-cols-3 gap-8">
                {noteStore.notes
                  .filter((note) => !note.isFavorite)
                  .map((note) => (
                    <NoteCard
                      key={note.id}
                      colors={note.colors}
                      colorNote={note.colorNote}
                      deleteNote={note.deleteNote}
                      description={note.description}
                      editNote={note.editNote}
                      isFavorite={note.isFavorite}
                      title={note.title}
                      id={note.id}
                    />
                  ))}
              </div>
            </section>
          )}
        </main>
      )}
    </Observer>
  );
}
