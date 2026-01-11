import {useAuth} from "../context/AuthContext.jsx";
export default function Home() {
    const {user,logout}=useAuth();
    return (
    <div>
       <h1>Welcome </h1>
       <button className="btn"onClick={logout}>Logout</button>
    </div>
    );
}
