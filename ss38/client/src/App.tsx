import React, { useMemo, useState,useEffect } from 'react';

import type { Book } from './components/types';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookSearchSortFilter from './components/BookSearchSortFilter';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks,addBook,updateBook,deleteBook } from './slice/Book.slice';
import type { RootState, AppDispatch } from './store';
// const initialBooks: Book[] = [
//   {
//     id: '1',
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     category: 'Novel',
//   },
//   {
//     id: '2',
//     title: 'A Brief History of Time',
//     author: 'Stephen Hawking',
//     year: 1988,
//     category: 'Science',
//   },
//   {
//     id: '3',
//     title: 'Sapiens',
//     author: 'Yuval Noah Harari',
//     year: 2011,
//     category: 'History',
//   },
// ];

const App: React.FC = () => {
  // const [books, setBooks] = useState<Book[]>(initialBooks);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const loading = useSelector((state: RootState) => state.books.loading);
  const books = useSelector((state: RootState) => state.books.books);
  console.log(books);
  
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const categories = useMemo(
    () => Array.from(new Set(books.map((b) => b.category))).sort(),
    [books],
  );

  const handleSubmit = (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    if (data.id) {
      dispatch(updateBook(data as Book));
      // setBooks((prev) =>
      //   prev.map((b) => (b.id === data.id ? ({ ...b, ...data } as Book) : b)),
      // );
    } else {
      const id = Date.now().toString();
      dispatch(addBook({ id, ...data } as Book));
    }
    setOpenForm(false);
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q),
      );
    }
    if (category !== 'all') out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === 'title') {
        const r = a.title.localeCompare(b.title);
        return sortDir === 'asc' ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === 'asc' ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);
if (loading) return <div>Loading...</div>;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            setSearch('');
            setCategory('all');
            setSortBy('title');
            setSortDir('asc');
          }}
        />
      </div>

      <div className="mt-6">
        <BookList
          books={filteredSorted}
          onEdit={(b) => {
            setEditing(b);
            setOpenForm(true);
          }}
          onDelete={(id) => dispatch(deleteBook(id))}
        />
      </div>

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
