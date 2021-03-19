import React from 'react';

//CSS
import classes from "./NavigationItems.css";

//IMPORT
import NavigationItem from "./NavigationItem/NavigationItem";

const  navigationItems = (props) => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
};

export default navigationItems;