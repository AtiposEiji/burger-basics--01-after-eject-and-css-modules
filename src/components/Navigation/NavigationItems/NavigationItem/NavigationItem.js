import React from 'react';

//CSS
import classes from "./NavigationItem.css";

//IMPORT

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a
                className={props.active ? classes.active : null}
                href={props.link}>{props.children}</a>
        </li>
    );
};

export default navigationItem;