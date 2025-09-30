import NoteList from './components/NoteList/NoteList';
import css from './page.module.css';
import { fetchNotes } from './service/api';

export default async function Home() {
  const notes = await fetchNotes();

  return (
    <div className={css.container}>
      <NoteList notes={notes}></NoteList>
    </div>
  );
}
