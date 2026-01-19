import {useAuth} from "../context/AuthContext.jsx";


const Dashboard = () => {
    const {user,logout}=useAuth();
  return (
    <div className="page">
      <header className="header">
        <div className="logo">MyLogo</div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </header>

      <main className="content">
        <div className="button-grid">
          <div className="bottom-row">
          <button className="square-btn top-btn">Button 1</button>
          </div>
             <div className="bottom-row">
               <button className="square-btn">Button 2</button>
               <button className="square-btn">Button 3</button>
            </div>
        </div>
     
      </main>
    </div>
  );
};

export default Dashboard;
