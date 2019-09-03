import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
        <img src="https://crossfitarmoury.com/wp-content/uploads/2015/04/logo-no-background-Grey-Large.png"/>
        
        <div className={s.loginBlock}>
            {props.isAuth 
                ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            
        </div>
      </header>
    )
}


export default Header;