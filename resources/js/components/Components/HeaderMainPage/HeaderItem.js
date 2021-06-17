import {NavLink} from "react-router-dom";
import React from "react";

export default function HeaderItem(props) {
    return (
        <div className='d-flex item-element-parent'>
            <NavLink to={props.link}>
                <div className='card border-0 shadow-el text-center'>
                    <div className='image-item-block'>
                        <img className="element-image" src={props.img} />
                    </div>
                    {props.title}
                </div>
            </NavLink>
        </div>
    )
}
