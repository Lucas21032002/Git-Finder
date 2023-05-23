import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom";

export function User({
    name,
    company,
    avatar_url,
    login,
    location,
    followers,
    following,
}: UserProps ) {
    return (
        <div>
            <img src={avatar_url}/>
            <h3>{name}</h3>
            <p>{company}</p>
            <p>
                <MdLocationPin/>
                <span>{location}</span>
            </p>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p>{following}</p>
            </div>
            <Link target="_blank" to={`https://github.com/${login}?tab=repositories`}>Ver todos repositórios</Link>
        </div>
    )
}