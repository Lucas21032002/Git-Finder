import React from "react";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";

export function Home() {
    const [ user, setUser ] = useState(null)
    return(
        <>
        <SearchBar/>
        <h1>gitHUb</h1>
        <p>Home</p>
        </>
    )
}