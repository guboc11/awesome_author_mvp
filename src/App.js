import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import WriterPage from './pages/WriterPage';
import EmployerPage from './pages/EmployerPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="writer" element={<WriterPage />} />
          <Route path="employer" element={<EmployerPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
