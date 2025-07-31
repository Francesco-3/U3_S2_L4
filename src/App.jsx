import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/myNav';
import Welcome from './components/welcome';
import MyFooter from './components/myFooter';
import BookList from './components/bookList';
import AllTheBooks from './components/allBooks';
import historyBooks from './data/history.json';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <Welcome />
      <BookList books={historyBooks} />
      <MyFooter />
    </div>
  );
}

export default App;