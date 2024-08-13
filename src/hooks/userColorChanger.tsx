'use client';
import { useState } from 'react';

export function useColorChange(initialColor: string = '#FFFFFF') {
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setIsDropdownOpen(false);
  };

  return {
    selectedColor,
    isDropdownOpen,
    toggleDropdown,
    handleColorChange,
  };
}
