import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import pagesPath from './pages/pagesPath';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={pagesPath.signin} element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
