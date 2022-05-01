import React from 'react';
import {NavLink} from 'react-router-dom';
import rootCss from '../../root.module.css';
import css from './Header.module.css';
import logo from '../../img/logo.svg';

const Header = () => {
    return (
        <div className={css.main_header}>
            <div className={rootCss.container}>
                <div className={css.header_wrap}>
                    <div>
                        <NavLink className={css.header_logo} to={'/go'}><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className={css.header_links}>
                        <NavLink className={css.header_link} to={'/go'}>Places</NavLink>
                        <NavLink className={css.header_link} to={'/go'}>Cooperation</NavLink>
                        <NavLink className={css.header_link} to={'/go'}>About us</NavLink>
                        <NavLink className={css.header_link} to={'/go'}>Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};