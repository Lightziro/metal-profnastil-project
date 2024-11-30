import React, { useState } from "react";
import {navItem} from "./constants";
import styles from './Header.module.scss';
import {useRouter} from "next/router";
import cn from 'classnames'
import Link from "next/link";

export default function Navigator() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>
        setIsMenuOpen(prev => !prev)


    return (
        <div className={cn('container', styles.navWrapper)}>
            <div className={styles.logoWrapper}>
                <Link href='/'>
                    <img className={styles.logo} alt='Логотип' src='/main-logo.png'/>
                </Link>
            </div>
            <button className={styles.burgerButton} onClick={toggleMenu}>
                ☰
            </button>
            <nav className={cn(styles.headerWrapper, { [styles.menuOpen]: isMenuOpen })}>
                {navItem.map((object, index) => (<NavItem {...object} key={index}/>))}
            </nav>
        </div>
    );
}

const NavItem = (props) => {
    const router = useRouter();
    return (
        <Link className={cn(styles.navLink, {
            [styles.active]: router.asPath === props.path
        })} href={props.path} passHref>
            {props.title}
        </Link>
    )
}
