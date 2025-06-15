import '../styles.css';
import { Market } from './components/Market';
import { Post } from './components/Post';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/market" element={<Market />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}
