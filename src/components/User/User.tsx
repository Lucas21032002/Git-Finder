import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom";
import classes from './User.module.css'

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
        <div className={classes.userContainer}>
            <img src={avatar_url}/>
            <h3>{name}</h3>
            { company && (
                <p>Cargo: {company}</p>
            )}
            {location && (
                <p>
                    <MdLocationPin/>
                    <span> Localização: {location}</span>
                </p>
            )}
            <div>
                <p>Seguidores: {followers}</p>
            </div>
            <div>
                <p>Seguindo: {following}</p>
            </div>
            <Link className={classes.link} target="_blank" to={`https://github.com/${login}?tab=repositories`}>Ver todos repositórios</Link>
        </div>
    )
}