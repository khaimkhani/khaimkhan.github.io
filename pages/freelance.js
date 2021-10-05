import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import MainBodyContainer from "../components/mainBody/mainBody";
import styles from '../styles/Home.module.scss';
import Head from "next/dist/shared/lib/head";

const Freelance = () => {
    return (
        <>
            <Head>
                <title>Freelance | Taimor Khan</title>
                <meta name="description" content="Custom website ordering with 24/7 support" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar highlight='FREELANCE' />
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