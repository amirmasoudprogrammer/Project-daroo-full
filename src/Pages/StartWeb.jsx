import React, {useState} from 'react';
import Container from '@mui/material/Container';
import {Grid} from "@mui/material";
import SliaderStart from "../Component/SliaderStart.jsx";
import styles from "../Style/StylesSLIDSart.module.css"

const StartWeb = ({data}) => {
    const [slide , setSlide] = useState(0)
    return (
        <Container maxWidth="xs">
            <div className={styles.slideStart}>
                {data.map((item, idx) =>
                    <Grid container  key={item.id}>
                        <Grid xs={12} item >
                          <SliaderStart slide={slide} setSlide={setSlide} idx={idx} data={item} />
                        </Grid>
                    </Grid>
                )}
               <span className={styles.indicators} >
                    {data.map((_,idx) => {
                        return <button  key={idx} onClick={() => setSlide(idx)} className={slide === idx ? styles.indicator : styles.indicator_active} ></button>
                    })}
               </span>
            </div>
        </Container>
    );
};

export default StartWeb;