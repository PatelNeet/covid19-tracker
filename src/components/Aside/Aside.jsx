import React from 'react';
import style from './Aside.module.css';

//import images
//Icon downalod Link: https://www.flaticon.com/
import cold from '../images/cold.png';
import cough from '../images/cough.png';
import breathing from '../images/breathing.png';
import tiredness from '../images/dizziness.png';
import fever from '../images/fever.png';
import runnynose from '../images/runny-nose.png';



const Aside = () => {

    

    return (
        <>
            <div className={style.aside_container}>
                <h1>Symptoms of Coronavirus</h1>

                <div className={style.row}>
                    <div className={style.card} >
                        <img src={cough} alt='ss' height='100px' width='100px' />
                        <p>cough</p>
                    </div>
                    <div className={style.card} >
                        <img src={cold} alt='ss' height='100px' width='100px' />
                        <p>cold</p>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.card} >
                        <img src={runnynose} alt='ss' height='100px' width='100px' />
                        <p>runny nose</p>
                    </div>
                    <div className={style.card} >
                        <img src={tiredness} alt='ss' height='100px' width='100px' />
                        <p>tiredness</p>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.card} >
                        <img src={fever} alt='ss' height='100px' width='100px' />
                        <p>fever</p>
                    </div>
                    <div className={style.card} >
                        <img src={breathing} alt='ss' height='100px' width='100px' />
                        <p>difficulty breathing</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Aside;