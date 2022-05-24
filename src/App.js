import './App.css';
import Login from './pages/Login';
import List from './pages/List';
import Search from './pages/Search';
import Router from './Router';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router />
      <Header />

    </div>
  );
}

export default App;
