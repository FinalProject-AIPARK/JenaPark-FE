import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import pagesPath from './pages/pagesPath';
import CreateAvatar from './pages/CreateAvatar';
import SignUp from './pages/SignUp';

function App() {
  if (false) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={pagesPath.signin} element={<SignIn />} />
        <Route path={pagesPath.signup} element={<SignUp />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* account
          history */}
        <Route path="/project" element={<CreateAvatar />} />
      </Routes>
    );
  }
}

export default App;
