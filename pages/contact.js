import Head from "next/dist/shared/lib/head";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import MainBodyContainer from "../components/mainBody/mainBody";
import NavBar from "../components/NavBar/NavBar";
import styles from '../styles/Contact.module.scss';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import emailjs from 'emailjs-com';
import { useRouter } from "next/router";



const Contact = () => {
    
    const [copied, setCopied] = useState(false);
    const [send, setSend] = useState(false);

    const userID = process.env.NEXT_PUBLIC_USER_ID;
    const template = process.env.NEXT_PUBLIC_TEMPLATE;
    const serviceID = process.env.NEXT_PUBLIC_S_TEMP;
    
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

    function submitForm(e) {
        
        e.preventDefault();

        emailjs.sendForm(serviceID, template, e.target, userID).then(
            (result) => {
                console.log(result.text);
                setSend(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
        setTimeout(() => setSend(false), 2000);
    
    }

    function copyMessage(text) {
        setCopied(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => setCopied(false), 10000);
    }

    return (
        <>
            <Head>
                <title>Contact | Taimor Khan</title>
                <meta name="description" content="Contact Taimor Khan and let him know why he deserves the world" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar highlight='CONTACT' drop={drop} setDrop={setDrop} />
            <div className={drop ? styles.dropdown : styles.dropdownHidden}>
                <span onClick={() => handleClick(0)}>PORTFOLIO</span>
                <span onClick={() => handleClick(1)}>FREELANCE</span>
                <span onClick={() => handleClick(2)}>CONTACT</span>
            </div>
            <MainBodyContainer>
                <div className={styles.contactContainer}>
                    <div className={styles.socialContainer}>
                        <h1>
                            {'//'} A LITTLE BIT MORE<span className={styles.blink}>_</span>
                        </h1>
                        <p>
                            Based in Toronto, Canada. I&apos;m a student at the University of Toronto graduating December 2021, looking for full-time opportunities for January 2022.
                            For inquiries, you can leave me a message or reach me on my social media, and I will get back to you ASAP.    
                        </p>
                    </div>
                    <div className={styles.animatedDiv} id='line1'>
                    </div>
                    <div className={styles.animatedDiv2} id='line2'> 
                    </div>
                    <div className={styles.animatedDiv3} id='line3'>  
                    </div>
                    <div className={styles.icons}>
                        <a href='https://github.com/khaimkhani' target='_blank' rel='noopener noreferrer'>
                            <AiFillGithub size={25} />
                        </a>
                        <a href='https://www.linkedin.com/in/muhammad-taimor-khan-8b938b1b8/' target='_blank' rel='noopener noreferrer'>
                        <AiFillLinkedin size={25} />
                        </a>
                        <AiOutlineMail size={25} data-tip data-for='mail' onClick={() => copyMessage('anjasinski07@gmail.com')}/>
                        <ReactTooltip id='mail' effect='solid' place='top'>
                            {
                                copied ?
                                <span>Copied!</span> :
                                <span>Click to Copy</span>
                            }
                        </ReactTooltip>
                    </div>
                    <form onSubmit={(e) => submitForm(e)}>
                        <input type='name' name='name' placeholder='Name'/>
                        <input type='email' name='email' placeholder='Email' />
                        <textarea name='message' rows='5' columns='20' placeholder='Message...' required />
                        <input type='submit' value={send ? 'Sent!' : 'Submit'} disabled={send}/>
                    </form>
                            
                </div>
            </MainBodyContainer>
            <Footer />
        </>
    )
}

export default Contact;