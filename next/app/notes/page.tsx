import NoteList from '../components/NoteList/page';
import { fetchNotes } from '../service/api';

export default async function Notes() {
  const notes = await fetchNotes();
  return <div>{notes?.length > 0 && <NoteList notes={notes}></NoteList>}</div>;
}
