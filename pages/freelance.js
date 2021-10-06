import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import MainBodyContainer from "../components/mainBody/mainBody";
import styles from '../styles/Home.module.scss';
import Head from "next/dist/shared/lib/head";
import { useRouter } from "next/router";

const Freelance = () => {
    
    const [drop, setDrop] = useState(false);
    const router = useRouter();
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
    
    return (
        <>
            <Head>
                <title>Freelance | Taimor Khan</title>
                <meta name="description" content="Custom website ordering with 24/7 support" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar highlight='FREELANCE' drop={drop} setDrop={setDrop} />
            <div className={drop ? styles.dropdown : styles.dropdownHidden}>
                <span onClick={() => handleClick(0)}>PORTFOLIO</span>
                <span onClick={() => handleClick(1)}>FREELANCE</span>
                <span onClick={() => handleClick(2)}>CONTACT</span>
            </div>
            <MainBodyContainer>
                <h1 className={styles.todo}>
                    UNDER CONSTRUCTION
                </h1>
            </MainBodyContainer>
            <Footer />
        </>
    )
}

export default Freelance;