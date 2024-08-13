export type ColorProps = {
  color: string;
  onClick: () => void;
};

export interface NoteCardProps {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  colorNote: string[];
  colors: string[];
  editNote: () => void;
  deleteNote: () => void;
}

export type HeaderProps = {
  title: string;
  isFavoriteNote: boolean;
  setIsFavoriteNote: (isFavorite: boolean) => void;
  onChangeTitle?: (e: string) => void;
};

export interface HandleColorChangeProps {
  handleColor: string;
  setSelectedColor: (color: string) => void;
  setIsDropdownOpen: (isDropdownOpen: boolean) => void;
  isDropdownOpen: boolean;
}

export interface TextAreaProps {
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
  textRef?: React.RefObject<HTMLTextAreaElement>;
  autoResizeTextarea?: boolean;
  maxTextareaHeight: number;
}
