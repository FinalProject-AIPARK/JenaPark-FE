import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Account from '@/pages/Account';
import CreateAvatar from '@/pages/CreateAvatar';
import History from '@/pages/History';

function App() {
  if (true) {
    return (
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project" element={<CreateAvatar />} />
      </Routes>
    );
  } else {
  }
}

export default App;
