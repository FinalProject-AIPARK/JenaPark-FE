import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import CreateAvatar from '@/pages/CreateAvatar';
import History from '@/pages/HistoryPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/redirect" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project/:projectId" element={<CreateAvatar />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
