"use client";
import { create_message } from "@/api/api";
import { use, useEffect, useState } from "react";

export default function Om() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageShown, setMessageShown] = useState('');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8">
            <div className="flex flex-col items-center">
                <p className="text-3xl mb-4">Send oss en melding</p>
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <input 
                            type="text" 
                            placeholder="Navn" 
                            className="w-full border border-gray-950 rounded-lg px-2 py-1 text-black"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        <input 
                            type="email" 
                            placeholder="E-post" 
                            className="w-full border border-gray-950 rounded-lg px-2 py-1 text-black"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Melding" 
                            className="w-full h-full border border-gray-950 rounded-lg px-2 py-1 text-black"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}></textarea>
                    </div>
                </div>
                <button 
                    className="h-min px-4 py-1 rounded-lg mt-2 w-32 bg-gradient-to-t from-cyan-800 to-cyan-400"
                    onClick={async () => {setMessageShown(await create_message(name, email, message))}}>Send</button>
                {messageShown && <p className="mt-4">{messageShown}</p>}
            </div>
            <div className="flex flex-col items-center">
                <p className="text-3xl  text-center mb-4">Besøk oss</p>
                <iframe className="rounded-lg border border-gray-950 w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1029163.872863429!2d10.885700879135426!3d59.74802094171434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416ff18bc37e67%3A0x6b862b110aeac8e7!2sSigma%20Technology%20Norway!5e0!3m2!1sen!2sno!4v1715687104940!5m2!1sen!2sno" width="600" height="450" loading="lazy"></iframe>
            </div>
        </div>
    );
}
