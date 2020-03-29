import React from 'react'
import classes from './Logo.css'
import burgerLogo from '../../assets/Images/logo.png'

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="myBurger"></img>
    </div>
)
export default logo;
