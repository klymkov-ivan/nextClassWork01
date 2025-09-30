import type { Note } from '../../service/api';
import css from './Notelist.module.css';

type Props = {
  notes: Note[];
};

export const NoteList = ({ notes }: Props) => {
  return (
    <ul className={css.noteList}>
      {notes.map((note) => (
        <li key={note.id} className={css.cardContainer}>
          <h2>{note.title}</h2>
          <h3>Tag: {note.tag}</h3>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
