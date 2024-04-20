import React from 'react';
import {Container} from "@mui/material";
import {Link} from "react-router-dom";
import svgICON from "../assets/img/Union 464.svg"
import svgICON2 from "../assets/img/Group 10242.svg"
import svgICON3 from "../assets/img/Union 466.svg"
import svgICON4 from "../assets/img/icons8_notification.svg"
import svgICON5 from "../assets/img/icons8_communication.svg"
import svgICON6 from "../assets/img/icons8_user.svg"
import styles from "../Style/headerFooter.module.css"


const HeadrAndFooter = ({children, name}) => {

    return (
        <>
            <Container>
                <header className={styles.Headers}>
                    <div className={styles.headerIcons}>
                        <Link to="/HomePage">
                            <img src={svgICON} alt="icons"/>
                        </Link>
                    </div>
                    <span>{name}</span>
                    <div className={styles.headerIcons}>
                        <Link to="/">
                            <img src={svgICON2} alt=""/>
                        </Link>
                    </div>
                </header>
                {children}
                <footer className={styles.Footers}>
                    <div className={styles.Itemslink}>
                        <Link clasName={styles.linke} to="/">
                            <img src={svgICON3} alt=""/>
                            <span>منوی اصلی</span>
                        </Link>
                        <Link clasName={styles.linke} to="/">
                            <img src={svgICON4} alt=""/>
                            <span>اعلان ها</span>
                        </Link>
                        <Link clasName={styles.linke} to="/">
                            <img src={svgICON5} alt=""/>
                            <span>پشتیبانی</span>
                        </Link>
                        <Link clasName={styles.linke} to="/">
                            <img src={svgICON6} alt=""/>
                            <span>پروفایل</span>
                        </Link>


                    </div>
                </footer>
            </Container>
        </>
    );
};

export default HeadrAndFooter;