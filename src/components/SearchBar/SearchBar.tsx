type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
}
import {useState, KeyboardEvent} from "react";
import { BsSearch } from "react-icons/bs";



export function SearchBar({loadUser}: SearchProps) {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

    return(
        <div>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div>
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