import React, { useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import MainBodyContainer from "../components/mainBody/mainBody";
import NavBar from "../components/NavBar/NavBar";
import styles from '../styles/Home.module.scss';
import Head from "next/dist/shared/lib/head";
import { useRouter } from "next/router";

const Portfolio = () => {
    
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
                <title>Portfolio | Taimor Khan</title>
                <meta name="description" content="Taimor Khan's Portfolio of things and stuff mainly related to computers and stuff hehe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar highlight='PORTFOLIO' drop={drop} setDrop={setDrop} />
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

export default Portfolio;