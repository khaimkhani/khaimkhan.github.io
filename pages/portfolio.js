import React, { useRef } from "react";
import Footer from "../components/Footer/Footer";
import MainBodyContainer from "../components/mainBody/mainBody";
import NavBar from "../components/NavBar/NavBar";
import styles from '../styles/Home.module.scss';
import Head from "next/dist/shared/lib/head";

const Portfolio = () => {
    

    return (
        <>
            <Head>
                <title>Portfolio | Taimor Khan</title>
                <meta name="description" content="Taimor Khan's Portfolio of things and stuff mainly related to computers and stuff hehe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar highlight='PORTFOLIO'/>
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