import {useAuth} from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const {user,logout}=useAuth();
    const navigate = useNavigate();
    const handleClickStats = () => {
      navigate('/stats');
  };
  const handleClickTopTracks = () => {
    navigate('/top-tracks');
};
  return (
    <div className="page">
      <header className="header">
        <div className="logo">Stats+</div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </header>

      <main className="content">
        <div className="button-grid">
          <div className="bottom-row">
          <button className="square-btn top-btn" onClick={handleClickStats}>Top Artists and Genres</button>
          </div>
             <div className="bottom-row">
               <button className="square-btn" onClick={handleClickTopTracks}>Top Tracks</button>
               <button className="square-btn">Recommended Tracks</button>
            </div>
        </div>
     
      </main>
    </div>
  );
};

export default Dashboard;
