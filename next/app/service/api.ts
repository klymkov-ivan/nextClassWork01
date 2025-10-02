import axios from 'axios';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export interface NewNote {
  title: string;
  content: string;
  tag: string;
}

interface ResponseAPI {
  notes: Note[];
}

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api/notes',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
  params: {
    perPage: 12,
  },
});

export const fetchNotes = async (): Promise<Note[]> => {
  const { data } = await api.get<ResponseAPI>('/');
  return data.notes;
};

export const getSingleNote = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/${id}`);
  return data;
};

export const createNewNote = async (note: NewNote): Promise<Note> => {
  const { data } = await api.post<Note>('/', note);
  return data;
};
