import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginClient, logoutClient } from "../Redux/Client/ClientSlice";

export const ClientForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleLogin = () => {
        dispatch(loginClient(name));
    }

    const handleLogout = () => {
        dispatch(logoutClient());
        setName('');
    }

    return (
        <>
            Usuário: {name}
            <input type="text" placeholder="Client Name" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}