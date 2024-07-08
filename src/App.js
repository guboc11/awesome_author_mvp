import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainPage from './pages/MainPage';
import WriterPage from './pages/WriterPage';
import EmployerPage from './pages/EmployerPage';
import LoginPage from './pages/LoginPage';
import MyPageNav from './components/MyPageNav';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}> </Route>
        <Route path="/mypage" element={<MyPageNav />}>
          <Route path="writer" element={<WriterPage />} />
          <Route path="employer" element={<EmployerPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
