import React, {useState, useEffect} from "react";
import styles from "./AsideCPGL.module.scss"
import { USER_MAIN_DATA } from "../../mock/mockDatabase";
import keyDataGetter from "../../utils/keyDataGetter";
import BoxModel from "./BoxModel";

const AsideCPGL  = () => {


    const id = 18

    const rawData = USER_MAIN_DATA.filter(user => user.id === id)[0]

    const data = keyDataGetter(rawData);

    console.log('asideCPGL', data)

    return (

        <aside className={styles.container}>

            {data && data.map(el => <BoxModel name={el.name} value={el.value} />)}

        </aside>

    )


}

export default AsideCPGL



