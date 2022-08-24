import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../styles/header.module.css';
import {motion} from 'framer-motion';

export default function Header(){
    return(
        <div className={styles.wrapper}>
        <div className={styles.menuContainer}>
            <NavLink  className={styles.menuItem} to="/" ><motion.div whileHover={{scale: 1.15, color:'rgb(224, 173, 21)'}} >Home</motion.div></NavLink>
            <NavLink className={styles.menuItem} to="/tjanster" ><motion.div whileHover={{scale: 1.15, color:'rgb(224, 173, 21)'}}>Tjänster</motion.div></NavLink>
            <NavLink className={styles.menuItem} to="/kontakt" ><motion.div whileHover={{scale: 1.15, color:'rgb(224, 173, 21)'}}>Kontakt</motion.div></NavLink>
            <NavLink className={styles.menuItem} to="/about" ><motion.div whileHover={{scale: 1.15, color:'rgb(224, 173, 21)'}}>Om</motion.div></NavLink>
        </div>
            
        </div>
    )
}