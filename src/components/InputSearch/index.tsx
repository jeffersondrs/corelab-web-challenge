'use client';

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type InputSearchProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function InputSearch({
  placeholder,
  value,
  onChange,
}: InputSearchProps) {
  return (
    <div className="flex flex-row shadow-md border border-[#D9D9D9] rounded-[3px] items-center justify-between p-2 max-w-[314.1px] w-full h-7 md:max-w-[530.17px]">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="bg-transparent w-full h-full rounded-full outline-none text-[9px] leading-[10.89px] placeholder-[#9A9A9A]"
        onChange={(e) => onChange(e.target.value)}
      />
      <AiOutlineSearch color="#9E9E9E" size={16} />
    </div>
  );
}
