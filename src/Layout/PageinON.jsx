import React from 'react';
import FOOTER from "./FOOTER";
import styles from "../Style/headerFooter.module.css";
import {Link, Outlet} from "react-router-dom";
import svgICON from "../assets/img/Union 464.svg";
import svgICON2 from "../assets/img/Group 10240.svg";
import {Container} from "@mui/material";

const PageinOn = ({children, name}) => {

    return (
        <>
            <Container maxWidth="xs">
                <header className={styles.Headers}>
                    <div className={styles.headerIcons}>
                        <Link to="/homepage">
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

                {
                    children

                }
                <Outlet/>

                <FOOTER/>

            </Container>
        </>
    );
};

export default PageinOn;