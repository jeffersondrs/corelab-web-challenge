import React from 'react';
import { ColorProps } from '@/types/global';

export default function Color({ color, onClick }: ColorProps) {
  return (
    <button
      className="w-9 h-9 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-label="Change Color"
    />
  );
}
