import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = ({ className }) => 
    <div className={className}>
        <LogIn/>
        <Register/>
    </div>;

const LogIn = ()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const [_, setCookies] = useCookies(["access_token"]);

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/auth/log-in", {
                                username,
                                password
                            });
            setCookies("access_token", response.data.token)
            window.localStorage.setItem("userId", response.data.userId)
            navigate("/")
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Log In"
        onSubmit= {onSubmit}
        />
    )
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [_, setCookies] = useCookies(["access_token"]);

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/auth/register", {
                username,
                password
            });
            setCookies("access_token", response.data.token)
            window.localStorage.setItem("userId", response.data.userId)
            navigate("/")
            alert('Registration complete!');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Sign Up"
        onSubmit= {onSubmit}
        />
)};

const AuthForm = ({username, 
    setUsername, 
    password, 
    setPassword, 
    label, 
    onSubmit
    }) =>
    <div>
    <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input 
            type="text" 
            id="username"
            value={username} 
            onChange={(event)=> setUsername(event.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(event)=> setPassword(event.target.value)}/>
        </div>
        <button type="submit">{label}</button>
    </form>
    </div>;