import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import pagesPath from './pages/pagesPath';
import CreateAvatar from './components/createAvatar';
import SignUp from './pages/SignUp';

function App() {
  return (
    <CreateAvatar />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path={pagesPath.signin} element={<SignIn />} />
    //   <Route path={pagesPath.signup} element={<SignUp />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;
