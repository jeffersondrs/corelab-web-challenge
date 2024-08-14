import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteCard from './index';
import noteStore from '@/utils/stores/NoteStore';

jest.mock('@/utils/stores/NoteStore', () => ({
  toggleFavorite: jest.fn(),
  deleteNote: jest.fn(),
  updateNote: jest.fn(),
}));

const mockProps = {
  id: '1',
  title: 'Test Note',
  description: 'This is a test note',
  colorNote: ['#FFFFFF'],
  isFavorite: false,
  colors: ['#FFFFFF', '#FF5733', '#33FF57'],
  editNote: jest.fn(),
  addNote: jest.fn(),
  deleteNote: jest.fn(),
};

describe('NoteCard Component', () => {
  it('renders NoteCard with title and description', () => {
    render(<NoteCard {...mockProps} />);

    expect(screen.getByDisplayValue('Test Note')).toBeInTheDocument();
    expect(screen.getByText('This is a test note')).toBeInTheDocument();
  });

  it('toggles favorite state', () => {
    render(<NoteCard {...mockProps} />);

    const favoriteButton = screen.getByRole('button', { name: /favorite/i });

    fireEvent.click(favoriteButton);

    expect(noteStore.toggleFavorite).toHaveBeenCalledWith('1');
  });

  it('changes note color when a new color is selected', () => {
    render(<NoteCard {...mockProps} />);

    const colorDropdownButton = screen.getByRole('button', {
      name: /change color/i,
    });
    fireEvent.click(colorDropdownButton);

    const colorOptions = screen.getAllByRole('button', { name: /color/i });
    expect(colorOptions).toHaveLength(mockProps.colors.length);

    fireEvent.click(colorOptions[1]);

    expect(noteStore.updateNote).toHaveBeenCalledWith(
      '1',
      'Test Note',
      'This is a test note',
      '#FF5733'
    );
  });

  it('deletes note when delete button is clicked', () => {
    render(<NoteCard {...mockProps} />);

    const deleteButton = screen.getByRole('button', { name: /delete note/i });

    fireEvent.click(deleteButton);

    expect(noteStore.deleteNote).toHaveBeenCalledWith('1');
  });

  it('edits the note title', () => {
    render(<NoteCard {...mockProps} />);
    screen.debug();
    const titleInput = screen.getByDisplayValue('Test Note');

    fireEvent.change(titleInput, { target: { value: 'Updated Note' } });

    expect(noteStore.updateNote).toHaveBeenCalledWith(
      '1',
      'Updated Note',
      'This is a test note',
      '#FFFFFF'
    );
  });
});
