import React from "react";
import styles from './mainBody.module.scss';

const MainBodyContainer = (props) => {
    return (
        <div className={styles.mainBodyContainer}>
            {props.children}
        </div>
    );
}

export default MainBodyContainer;