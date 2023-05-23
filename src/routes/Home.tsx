import { useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { User } from "../components/User/User";
import { UserProps } from "../types/user";

export function Home() {
    const [ user, setUser ] = useState<UserProps | null>(null)

    const loadUser = async(username: string) => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json();
        console.log(data);
        
        const { avatar_url, login, location, followers, following, name, company } = data;

        const userData: UserProps = {
            avatar_url, 
            login, 
            location, 
            followers, 
            following,
            name,
            company
        }

        setUser(userData)
    }

    return(
        <>
        <SearchBar loadUser={loadUser}/>
        {
            user && <User {...user} />
        }
        </>
    )
}