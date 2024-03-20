import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Typography variant="h2" align="center" mt={5} mb={4} className="home-title">Добро пожаловать!</Typography>
        <Card className="home-card">
          <CardContent>
            <Typography variant="h5" mb={2} className="home-card-title">Основные страницы</Typography>
            <List>
              <ListItem component={Link} to="/" className="home-card-link">
                <ListItemText primary="Главная страница" />
              </ListItem>
              <ListItem component={Link} to="/login" className="home-card-link">
                <ListItemText primary="Страница входа" />
              </ListItem>
              <ListItem component={Link} to="/movies" className="home-card-link">
                <ListItemText primary="Страница с фильмами" />
              </ListItem>
              <ListItem component={Link} to="/profile" className="home-card-link">
                <ListItemText primary="Страница профиля" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className="home-card" style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h5" mb={2} className="home-card-title">Информация о приложении</Typography>
            <Typography variant="body1" mb={1} className="home-card-text">
              Если пользователь кликает на страницу "профиля" и не авторизован, он будет перенаправлен на страницу <Link to="/login" className="home-card-link">/login</Link>.
            </Typography>
            <Typography variant="body1" mb={1} className="home-card-text">
              Форма входа (/login) принимает следующие данные:
            </Typography>
            <List>
              <ListItem className="home-card-text">
                <ListItemText primary="Имя пользователя: Admin" />
              </ListItem>
              <ListItem className="home-card-text">
                <ListItemText primary="Пароль: 12345" />
              </ListItem>
            </List>
            <Typography variant="body1" mt={2} className="home-card-text">
              При вводе некорректных данных, вы увидите сообщение: "Имя пользователя или пароль введены не верно".
            </Typography>
            <Typography variant="body1" className="home-card-text">
              При вводе корректных данных, вы будете перенаправлены на страницу <Link to="/profile" className="home-card-link">/profile</Link>.
            </Typography>
            <Typography variant="body1" mt={2} style={{ color: '#000000' }}>
              Для страницы с фильмами (/movies) использовано следующее API: <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>OMDb API</a>.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
