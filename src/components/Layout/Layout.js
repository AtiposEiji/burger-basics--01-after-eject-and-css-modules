import React from "react";

//CSS
import classes from "./Layout.css";

//IMPORT
import Aux from "../../hoc/ax";

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;