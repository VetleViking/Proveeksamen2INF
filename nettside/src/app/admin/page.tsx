"use client";
import LoginComponent from "@/components/LoginComponent";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CreateUser from "@/components/CreateUser";
import { delete_message, get_messages } from "@/api/api";

export default function Ansatte() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetch_messages() {
            const data = await get_messages();

            setMessages(data);
        }

        fetch_messages();
    }, []);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    if (!loggedIn) {
        return (
            <div className="flex justify-center mt-52 mb-40">
                <LoginComponent />
            </div>
        );
    }

    return (
        <div>
            <p className="text-3xl text-center my-12">Velkommen til admin-panelet</p>
            <div className="grid grid-cols-2 justify-items-center">
                <div>
                    <p>Meldinger:</p>
                    <div>
                    {messages && Object.entries(messages).map(([key, message]: [string, any], index: number) => {
                        return (
                            <div key={index} className="border border-cyan-900 rounded-lg p-2 mt-2">
                                <p className="break-all"><b>ID:</b> {key}</p>
                                <p className="break-all"><b>Navn:</b> {message.name}</p>
                                <p className="break-all"><b>E-post:</b> {message.email}</p>
                                <p><b>Melding:</b></p>
                                <p className="break-all">{message.message}</p>
                                <button className="px-4 py-1 rounded-lg mt-2 w-32 bg-gradient-to-t from-cyan-800 to-cyan-400" onClick={async () => {
                                    delete_message(key); // Pass the key to the delete_message function
                                    const data = await get_messages();
                                    setMessages(data);
                                }}>Slett</button>
                            </div>
                        );
                    })}
                    </div>
                </div>
                <div>
                    <p>Legg til admin-bruker:</p>
                    <CreateUser />
                </div>
            </div>
            <div className="flex justify-center mt-24">
                <button 
                    className="px-4 py-1 rounded-lg mt-2 w-32 bg-gradient-to-t from-cyan-800 to-cyan-400" 
                    onClick={() => { Cookies.remove('token'); window.location.reload(); }}>Logg ut</button>
            </div>
        </div>
    );
}
