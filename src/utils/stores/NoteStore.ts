import { makeAutoObservable } from 'mobx';
import { NoteCardProps } from '@/types/global';
import { colors } from '@/utils/constants';

class NoteStore {
  notes: NoteCardProps[] = [];
  colors: string[] = colors;

  constructor() {
    makeAutoObservable(this);
  }

  addNote(
    title: string,
    description: string,
    color: string,
    isFavorite: boolean
  ) {
    const id = Date.now().toString();
    const newNote: NoteCardProps = {
      id,
      title,
      description,
      isFavorite,
      colorNote: [color],
      colors: this.colors,
      editNote: () => this.updateNote(id, title, description, color),
      deleteNote: () => this.deleteNote(id),
    };

    this.notes.push(newNote);
  }

  toggleFavorite(id: string) {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.isFavorite = !note.isFavorite;
    }
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  updateNote(id: string, title: string, description: string, color: string) {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.title = title;
      note.description = description;
      note.colorNote = [color];
    }
  }

  searchNotes(query: string): NoteCardProps[] {
    const lowerQuery = query.toLowerCase();

    return this.notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(lowerQuery) ||
        note.description.toLowerCase().includes(lowerQuery) ||
        note.colorNote.some((color) => color.toLowerCase().includes(lowerQuery))
      );
    });
  }
}

const noteStore = new NoteStore();
export default noteStore;
