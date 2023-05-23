import classes from './Error.module.css'
import { BiError } from 'react-icons/bi'

export function Error () {
    return (
        <div className={classes.errorContent}>
            <BiError size={35} color="#F2D026"/>
           <p>Usuário não encontrado!</p>
        </div>
    )
}