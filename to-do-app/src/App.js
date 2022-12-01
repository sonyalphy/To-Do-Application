import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login/Login';
import ToDo from './components/ToDo/todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/todo" element={<ToDo />}>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
