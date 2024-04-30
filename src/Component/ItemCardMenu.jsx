import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Style/StylesCardMenu.module.css"

const ItemCardMenu = ({data}) => {
    console.log(data)
    return (
      <>
       <Link to={`/homepage/${data.titlelinke}`} className={styles.Cards}>
           <div className={styles.Images}>
               <img src={data.img} alt="imgcard"/>
           </div>
           <span>{data.title}</span>
       </Link>

      </>
    );
};

export default ItemCardMenu;