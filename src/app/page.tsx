'use client';
import { CreateNote, InputSearch, NoteCard } from '@/components';
import React from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

export default function Home() {
  const [value, search] = React.useState('');
  console.log(value);

  return (
    <main className="flex flex-col bg-[#F0F2F5] h-full w-full max-w-[91rem]">
      <header className="flex flex-row justify-between h-14 items-center gap-2 w-full px-3 shadow-[#95959524] shadow-md  bg-[#FFFFFF]">
        <div className='flex flex-row w-full gap-10'>
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
          colorNote={[]}
          isFavorite={false}
          onFavorite={function (): void {
            throw new Error('Function not implemented.');
          }}
          deleteNote={function (): void {}}
          editNote={function (): void {}}
          title="Título"
          description="Criar nota..."
        />
      </div>
      <section className="flex flex-col w-full items-center">
        <div className="flex flex-row justify-center w-full px-16 md:px-36">
          <p className="w-full text-start text-xs font-normal text-[#464646]">
            Favoritas
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:w-full md:px-20">
          <NoteCard
            title="Título"
            description="Clique ou arraste o arquivo para esta área para fazer upload"
            editNote={() => console.log('Edit Note')}
            deleteNote={() => console.log('Delete Note')}
            colorNote={[
              '#FFFFFF',
              '#BAE2FF',
              '#B9FFDD',
              '#FFE8AC',
              '#FFCAB9',
              '#F99494',
              '#9DD6FF',
              '#ECA1FF',
              '#DAFF8B',
              '#FFA285',
              '#CDCDCD',
              '#979797',
              '#A99A7C',
            ]}
            isFavorite={false}
            onFavorite={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <NoteCard
            title="Título"
            description="Clique ou arraste o arquivo para esta área para fazer upload"
            editNote={() => console.log('Edit Note')}
            deleteNote={() => console.log('Delete Note')}
            colorNote={[
              '#FFFFFF',
              '#BAE2FF',
              '#B9FFDD',
              '#FFE8AC',
              '#FFCAB9',
              '#F99494',
              '#9DD6FF',
              '#ECA1FF',
              '#DAFF8B',
              '#FFA285',
              '#CDCDCD',
              '#979797',
              '#A99A7C',
            ]}
            isFavorite={false}
            onFavorite={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </section>
      <section className="flex flex-col w-full items-center pb-5">
        <div className="flex flex-row justify-center w-full px-16 md:px-36">
          <p className="w-full text-start text-xs font-normal text-[#464646]">
            Outras
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:w-full md:px-20 md:grid md:grid-cols-3">
          <NoteCard
            title="Título"
            description="Clique ou arraste o arquivo para esta área para fazer upload"
            editNote={() => console.log('Edit Note')}
            deleteNote={() => console.log('Delete Note')}
            colorNote={[
              '#FFFFFF',
              '#BAE2FF',
              '#B9FFDD',
              '#FFE8AC',
              '#FFCAB9',
              '#F99494',
              '#9DD6FF',
              '#ECA1FF',
              '#DAFF8B',
              '#FFA285',
              '#CDCDCD',
              '#979797',
              '#A99A7C',
            ]}
            isFavorite={false}
            onFavorite={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </section>
    </main>
  );
}
