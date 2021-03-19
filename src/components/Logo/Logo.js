import React from 'react';

//CSS
import classes from "./Logo.css";

//IMPORT
import burgerLogo from "../../assets/Images/burger-logo.png";

const Logo = (props) => {
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    );
};

export default Logo;
