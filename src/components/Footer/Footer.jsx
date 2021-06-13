import React from 'react';
import style from './Footer.module.css';

const Footer = () => {

    const Year = new Date();
    const FullYear = Year.getFullYear();

    return (

        <footer class={style.section__footer}>
            <div class={style.copyright}>
                <p>{`© ${FullYear} All Rights Reserved NeetPatel`}</p>
            </div>

            <div class={style.follow}>
                <div class={style.follow__icon}>
                    <a className={style.fab} href="https://www.instagram.com/patel_neet_074/" target="_newtab"><i className="fab fa-instagram-square"></i></a>

                    <a className={style.fab} href="https://github.com/PatelNeet" target="_newtab"><i className="fab fa-github-square"></i></a>

                    <a className={style.fab} href="https://youtu.be/WDLHIxTaZHI"><i className="fab fa-youtube-square" target="_newtab"></i></a>

                    <a className={style.fab} href="https://www.facebook.com/neet.patel.140193" target="_newtab"><i className="fab fa-facebook-square"></i></a>
                </div>
            </div>

        </footer>


    )
}

export default Footer;