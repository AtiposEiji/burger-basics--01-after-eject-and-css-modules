import React from 'react';

//CSS
import classes from "./BuildControl.css";
//IMPORT

const buildControl = (props) => {
    return(
        <div className={classes.buildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
};

export default buildControl;