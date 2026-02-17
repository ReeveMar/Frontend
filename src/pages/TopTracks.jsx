import {useAuth} from '../context/AuthContext.jsx';
import {useState} from "react";
import Select from "react-select";
const TopTracks = () => {
    const {user,logout}=useAuth();
    const[timeRange, setTimeRange]=useState(0);
    const options = [
        { value: 0, label: "Past Month" },
        { value: 1, label: "Past 6 Months" },
        { value: 2, label: "All Time" },
      ];
    if (!user) {
    return <div className="stats-error">No user data available.</div>;
  }

const spotifyStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#121212",
    borderColor: state.isFocused ? "#1DB954" : "#282828",
    boxShadow: state.isFocused ? "0 0 0 1px #1DB954" : "none",
    "&:hover": {
      borderColor: "#1DB954",
    },
    borderRadius: "8px",
    padding: "2px",
    minHeight: "42px",
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#181818",
    borderRadius: "8px",
    overflow: "hidden",
    marginTop: "4px",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#1DB954"
      : state.isFocused
      ? "#282828"
      : "#181818",
    color: state.isSelected ? "black" : "white",
    padding: "10px 14px",
    cursor: "pointer",
    transition: "background 0.15s ease",
  }),

  singleValue: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#1DB954"
      : state.isFocused
      ? "#282828"
      : "#181818",
    color: state.isSelected ? "black" : "white",
    padding: "10px 14px",
    cursor: "pointer",
    transition: "background 0.15s ease",
  }),



  placeholder: (base) => ({
    ...base,
    color: "#b3b3b3",
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "#1DB954" : "#b3b3b3",
    "&:hover": {
      color: "#1DB954",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

return(
     <div className="stats-container">
        <div>
      <label>
        Choose time range:
        <Select
        options={options}
        value={options.find(option => option.value === timeRange)}
        onChange={(option) => setTimeRange(option.value)}
        styles={spotifyStyles}
        isSearchable={false}
        />
      </label>
      </div>

      <h1 className="stats-title">Your Top Tracks</h1>
      <div className="stats-grid">
        <div className="stats-card">
          <h2>{options.find(option => option.value === timeRange)?.label}</h2>
          <ol>{user.favourite_tracks[options.find(option => option.value === timeRange)?.value][0].map((track,index) => (
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
