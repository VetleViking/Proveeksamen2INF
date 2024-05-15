import { create_user } from "@/api/api";
import { useState } from "react";

const CreateUser = () => {   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrormessage] = useState('');

    const create_user_handler = async (username: string, password: string) => {
        const data = await create_user(username, password);
        
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = '/';
        } else {
            setErrormessage(data.message);
        }
    }

    return (
        <div className="flex flex-col items-center gap-2 w-48 p-2 bg-gray-950 rounded-md border border-cyan-900">
            <input 
                className="w-full rounded-sm text-black"
                type="text" 
                placeholder="brukernavn" 
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}/>

            <input
                className="w-full rounded-sm mt-2 text-black" 
                type="text" 
                placeholder="passord"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                
            <button className="px-4 py-1 rounded-lg mt-2 w-32 bg-gradient-to-t from-cyan-800 to-cyan-400" onClick={() => {create_user_handler(username, password)}}>Lag Bruker</button>
            <p className="text-red-500 text-center">{errormessage}</p>
        </div>
    );
};

export default CreateUser;