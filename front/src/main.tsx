import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Home from './pages/Home/Home.tsx';
import Footer from './components/Footer/Footer.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import { AuthProvider } from './context/AuthProvider.tsx';

const root = document.getElementById('root')!;

ReactDom.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
