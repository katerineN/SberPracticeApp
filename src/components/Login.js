import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, TextField, Button, Link, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './styles/login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotDialogOpen, setForgotDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Admin' && password === '12345') {
      console.log('Успешный вход');
      onLogin(); 
      navigate('/profile');
    } else {
      setError('Имя пользователя или пароль введены неверно');
    }
  };

  const handleForgotDialogOpen = () => {
    setForgotDialogOpen(true);
  };

  const handleForgotDialogClose = () => {
    setForgotDialogOpen(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Typography variant="h4" align="center" mt={5} mb={4} sx={{ color: '#007bff' }}>Вход</Typography>
        <Card className="login-card">
          <CardContent>
            <TextField
              fullWidth
              label="Имя пользователя"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Пароль"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              sx={{ mt: 2 }}
            >
              Войти
            </Button>
            {error && <Typography variant="body2" mt={2} sx={{ color: 'red' }}>{error}</Typography>}
          </CardContent>
        </Card>
        <Typography variant="body1" mt={2} align="center" sx={{ color: '#007bff' }}>
          Не можете войти?{' '}
          <Link
            href="#"
            onClick={handleForgotDialogOpen}
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Забыли пароль?
          </Link>
        </Typography>

        <Dialog open={forgotDialogOpen} onClose={handleForgotDialogClose}>
          <DialogTitle>Забыли пароль?</DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Имя пользователя: <strong>Admin</strong>
            </Typography>
            <Typography variant="body1">
              Пароль: <strong>12345</strong>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleForgotDialogClose} color="primary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Login;
