import React from "react";

//CSS
import classes from "./Layout.css";

//IMPORT
import Aux from "../../hoc/ax";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;