import { useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { User } from "../components/User/User";
import { Error } from "../components/Error/Error"
import { UserProps } from "../types/user";

export function Home() {
    const [ user, setUser ] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)

    const loadUser = async(username: string) => {
        setError(false);
        setUser(null);
        
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json();

        if(res.status === 404) {
            setError(true)
            return;
        }
        
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
        {
            error && <Error />
        }
        </>
    )
}