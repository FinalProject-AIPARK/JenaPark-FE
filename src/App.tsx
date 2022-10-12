import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import CreateAvatar from '@/pages/CreateAvatar';
import History from '@/pages/HistoryPage';
import MyPage from '@/pages/MyPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/redirect" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/project/:projectId" element={<CreateAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
