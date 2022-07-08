import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/login_component';
import Register from './components/register_component'




ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

