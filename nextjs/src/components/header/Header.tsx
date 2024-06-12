import React from "react";
import {navItem} from "./constants";
import styles from './Header.module.scss';
import {useRouter} from "next/router";
import cn from 'classnames'
import Link from "next/link";

export default function Navigator() {
    return (
        <div className='container'>
            <nav className={styles.headerWrapper}>
                {navItem.map((object, index) => (<NavItem {...object} key={index}/>))}
            </nav>
        </div>
    );
}

const NavItem = (props) => {
    const router = useRouter();
    return (
        <Link className={cn(styles.navLink, {
            [styles.active]: router.pathname === props.path
        })} href={props.path} passHref>
            {props.title}
        </Link>
    )
}
