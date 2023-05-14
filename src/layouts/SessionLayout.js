import React from "react"
import NavBarLeft from "../components/NavBars/NavBarLeft"
import NavBarTop from "../components/NavBars/NavBarTop"
import styles from "./SessionLayout.module.scss"
import { Outlet } from "react-router-dom"


const SessionLayout = ({children }) => {


    return(


        <div className={styles.container}>

           <NavBarTop/>
           <div className={styles.sidebarAndDynamicPageContainer}>
           <NavBarLeft/> 
            <Outlet />
           </div>
        
         
        </div>



    )



}


export default SessionLayout