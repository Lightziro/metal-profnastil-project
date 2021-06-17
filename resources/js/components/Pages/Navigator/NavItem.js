import React from "react";
import {NavLink} from "react-router-dom";

export default function NavItem(props) {
    return (
        <div className='nav-item'>
            <NavLink exact className='nav-link' to={props.link}>
                {props.title}
            </NavLink>
        </div>
    )
}
