import React from "react"
import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/">Главная</Link>  
                </li>
                <li>
                <Link to="/Gallery">Галерея</Link>  
                </li>
            </ul>

        </nav>
    )
}