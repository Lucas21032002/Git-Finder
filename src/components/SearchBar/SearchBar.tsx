type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
}
import {useState, KeyboardEvent} from "react";
import { BsSearch } from "react-icons/bs";

import classes from './SearchBar.module.css'



export function SearchBar({loadUser}: SearchProps) {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

    return(
        <div className={classes.searchContainer}>
            <h1>Github finder</h1>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.inputContainer}>
                <input 
                type="text" 
                placeholder='Digite aqui' 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}><BsSearch/>Pesquisar</button>
            </div>
        </div>
    )
}