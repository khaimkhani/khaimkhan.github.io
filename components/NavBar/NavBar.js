import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image'; 
import { useRouter } from 'next/router';

import logo from '../../public/static/images/Open.png';
import { FaHamburger } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';



const NavBar = (props) => {

    
    const router = useRouter();

    const navItems = [
        'PORTFOLIO',
        'FREELANCE',
        'CONTACT'
    ]; 

    

    const handleClick = (key) => {
        switch (key) {
            case 0:
                router.push('/portfolio');
                break;

            case 1:
                router.push('/freelance');
                break;
            default:
                router.push('/contact');    
        }
    };

    const goHome = () => {
        router.push('/');
    }

    return  (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt='logo' className={styles.logo} onClick={goHome} width={160}/>
        
            </div>
            <div className={styles.navItemsContainer}>
                {navItems.map(
                    (items, i) => 
                        <span key={i} className={props.highlight === items ? styles.navItemsHigh : styles.navItems } onClick={() => handleClick(i)}>
                            {props.highlight === items ? '> ' + items + ' <': items}
                        </span>
                )}
            </div>
            
            <div className={styles.mobileContainer}>
                {props.drop ? <AiOutlineClose onClick={() => props.setDrop(!props.drop)} size={20} /> : <FaHamburger onClick={() => props.setDrop(!props.drop)} size={20} />}
            
            </div>
         
        </nav>
    )
}

export default NavBar;