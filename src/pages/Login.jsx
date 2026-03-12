export default function Login() {
    function handleLogin(){
        window.location.href = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/` : '/';
    }
    return(
        <div className="login-container">
            <h1 className="login-title">Stats+</h1>
            <button className="login-button" onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
}

