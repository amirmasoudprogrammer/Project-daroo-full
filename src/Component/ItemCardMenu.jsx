import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Style/StylesCardMenu.module.css"

const ItemCardMenu = ({data}) => {
    return (
      <>
       <Link to={`/HomePage/${data.id}`} className={styles.Cards}>
           <div className={styles.Images}>
               <img src={data.img} alt="imgcard"/>
           </div>
           <span>{data.title}</span>
       </Link>

      </>
    );
};

export default ItemCardMenu;