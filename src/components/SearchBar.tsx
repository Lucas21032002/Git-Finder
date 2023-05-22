import React from 'react';
import { BsSearch } from "react-icons/bs";

export function SearchBar() {
    return(
        <div>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div>
                <input type="text" placeholder='Digite aqui'/>
                <button><BsSearch/>Pesquisar</button>
            </div>
        </div>
    )
}