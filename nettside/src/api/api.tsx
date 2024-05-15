import { json } from "stream/consumers";

export async function create_user(username: string, password: string) {
    const response = await fetch(`http://localhost:4000/api/v1/users/createuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    return await response.json();
}

export async function login(username: string, password: string) {
    const response = await fetch(`http://localhost:4000/api/v1/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    return await response.json();
}

export async function get_messages() {
    const response = await fetch(`http://localhost:4000/api/v1/messages/getmessages`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}

export async function create_message(name: string, email: string, message: string) {
    if (!name || !email || !message) {
        return 'Navn, epost og melding er påkrevd';
    }

    const response = await fetch(`http://localhost:4000/api/v1/messages/createmessage/${name}/${email}/${message}`, {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}

export async function delete_message(id: string) {
    const response = await fetch(`http://localhost:4000/api/v1/messages/deletemessage/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}