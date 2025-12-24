import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Home from './pages/Home/Home.tsx';
import Footer from './components/Footer/Footer.tsx';
import Login from './pages/Login/Login.tsx';

const root = document.getElementById('root')!;

ReactDom.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
