import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import pagesPath from './pages/pagesPath';
import CreateAvatar from './components/createAvatar';

function App() {
  return (
    <div>
      <CreateAvatar />
    </div>
  );
}

export default App;
