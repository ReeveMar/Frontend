import {useAuth} from '../context/AuthContext.jsx';
import {useState} from "react";
const TopTracks = () => {
    const {user,logout}=useAuth();
    const[timeRange, setTimeRange]=useState("short_term");
    if (!user) {
    return <div className="stats-error">No user data available.</div>;
  }
  return(
     

     <div className="stats-container">
        <div>
      <label>
        Choose time range:
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="short_term">Last 4 weeks</option>
          <option value="medium_term">Last 6 months</option>
          <option value="long_term">All time</option>
        </select>
      </label>
      </div>

      <h1 className="stats-title">Your Top Tracks</h1>
      <div className="stats-grid">
        <div className="stats-card">
            <h2>Past Month</h2>
          <ol>{user.favourite_tracks.map((track,index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "20px" ,padding : "27px", borderBottom: "1px solid #e5e5e5"}}>
              #{index + 1}
              
              <img
                src={track[2]}
                alt={track[0]}
                style={{ width: 75, height: 75, borderRadius: "75%" }}
              />
              {track[0]} by {track[1]}

            </li>
      
          ))}
          </ol>
          
        </div>
    </div>
    </div>


  );
}

export default TopTracks;
