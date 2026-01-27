export default function Login() {
    function handleLogin(){
        window.location.href = 'http://127.0.0.1:8000/core/login/';
    }
    return(
        <div className="login-container">
            <h1 className="login-title">Stats+</h1>
            <button className="login-button" onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
}

