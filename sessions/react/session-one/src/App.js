import './App.css';
import BookCard from './components/BookCard/BookCard';
import Card from './components/UserCard/Card';

function App() {

  let users = [
    {
      id: 1,
      fullName: 'Viktor Ahmeti',
      occupation: 'React Instructor'
    },
    {
      id: 2,
      fullName: 'Bleon Pireva',
      occupation: 'React Student'
    },
    {
      id: 3,
      fullName: 'Lina Demiri',
      occupation: 'React Student'
    },
    {
      id: 4,
      fullName: 'Rina Shala',
      occupation: 'React Student'
    }
  ]


  let books = [
    {
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      pages: 1176,
    },
    {
      title: "The Hobbit",
      author: "J. R. R. Tolkien",
      pages: 295,
    },
    {
      title: "The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Two Towers",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Return of the King",
      author: "J. R. R. Tolkien",
      pages: 130,
    },
    {
      title: "The Silmarillion",
      author: "J. R. R. Tolkien",
      pages: 336,
    },
    {
      title: "The Children of Hurin",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
  ];

  books.sort((b1, b2) => b1.pages > b2.pages ? 1 : -1);

  return <>
    <h1>Users</h1>
    <div className='Users-List'>
      {
        users.map(u => <Card key={u.id} user={u}></Card>)
      }
    </div>
    <h1>Books</h1>
    <div className='Users-List'>
      {
        books.map(b => <BookCard key={b.title} book={b}></BookCard>)
      }
    </div>
  </>;
}

export default App;
