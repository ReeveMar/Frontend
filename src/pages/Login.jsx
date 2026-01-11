export default function Login() {
    function handleLogin(){
        window.location.href = 'http://127.0.0.1:8000/core/login/';
    }
    return(
        <div className="container center column">
        <button className="btn" onClick={handleLogin}>
            Sign in with Spotify
        </button>
        </div>
    );
}

