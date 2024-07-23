import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing';
import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import BlogPage from './pages/blogpage';
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard/:page_id?/:view_key?" element={<Dashboard />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
