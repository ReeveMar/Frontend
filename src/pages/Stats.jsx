import {useAuth} from "../context/AuthContext.jsx";
const Stats = () => {
    const {user,logout}=useAuth();
  if (!user) {
    return <div className="stats-error">No user data available.</div>;
  }


  return (
    <div className="stats-container">
      <h1 className="stats-title">Your Stats</h1>
      <div className="stats-grid">
        <div className="stats-card">
          <h2>Top Artists</h2>
          <ol>{user.favourite_artists.map((artist,index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "20px" ,padding : "27px", borderBottom: "1px solid #e5e5e5"}}>
              #{index + 1}
              
              <img
                src={artist[1]}
                alt={artist[0]}
                style={{ width: 75, height: 75, borderRadius: "75%" }}
              />
              {artist[0]}

            </li>
      
          ))}
          </ol>
          
        </div>
        <div className="stats-card">
          <h2>Top Genres</h2>
          <ol>{user.favourite_genres.map((genre,index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "54px",borderBottom: "1px solid #e5e5e5" }}>
              #{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{genre}
               
            </li>
      
          ))}
          </ol>
          
          
        </div>
      </div>
    </div>
  );
};

export default Stats;