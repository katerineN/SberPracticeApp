import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles/profile.css'; 

const Profile = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Если пользователь не аутентифицирован, перенаправляем на страницу входа
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="profile-container">
      <Typography variant="h2" className="profile-title">Профиль пользователя</Typography>
      <Typography variant="body1" className="profile-text">Добро пожаловать в ваш профиль!</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout} className="profile-button">
        Выйти из аккаунта
      </Button>
    </div>
  );
};

export default Profile;
