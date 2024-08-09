import React from "react";

type ColorProps = {
  color: string;
  onClick: () => void;
};

export default function Color({ color, onClick }: ColorProps) {
  return (
    <div
      className="w-9 h-9 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}