import './themes/App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Stats from './pages/Stats';
import TopTracks from './pages/TopTracks';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/stats" element={<ProtectedRoute><Stats /></ProtectedRoute>} />
      <Route path="/top-tracks" element={<ProtectedRoute><TopTracks /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
