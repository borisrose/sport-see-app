import React, { useState, useEffect } from "react"
import SectionDailyActivity from "../SectionDailyActivity/SectionDailyActivity"
import SectionDIS from "../SectionDIS/SectionDIS"
import AsideCPGL from "../AsideCPGL/AsideCPGL"
import styles from"./Dashboard.module.scss"

const Dashboard = () => {


    return (

        <div className={styles.container}>

            <div className={styles.leftContainer}>

                <header>

                <h1>Bonjour Thomas</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                </header>

                <main>

                <SectionDailyActivity />
                <SectionDIS/>


                </main>
    



            </div>

            <AsideCPGL />
          
        
        
        </div>
   

    )


}


export default Dashboard