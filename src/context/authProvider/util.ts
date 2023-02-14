import { api } from "../../service/api";
import { IUser } from './types';


export function setUserLocalStorage ( user: IUser | null)  {
    localStorage.setItem('object', JSON.stringify(user));
}

export function getUserLocalStorage ()  { 
    const json = localStorage.getItem('object');

    if(!json) { 
        return null;
    }

    const object = JSON.parse(json)

    return object ?? null; 
}

export async function LoginRequest (username: string, password: string) { 
 
    try {
        const request = await api.post("/auth/signin", {username, password})

        return request.data;
    } catch (error) {
        console.log(error); 
    }
}