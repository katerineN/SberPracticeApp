import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Movies from './components/Movies'; 
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверяем localStorage на наличие информации об авторизации
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const handleLogin = () => {
    // Успешный вход - сохраняем в localStorage и устанавливаем isAuthenticated в true
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Выход - удаляем из localStorage и устанавливаем isAuthenticated в false
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/movies" element={<Movies />} /> 
        <Route
          path="/profile"
          element={<Profile isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
