import React from "react"
import styles from './NavBarTop.module.scss'
import logo from "../../assets/svg/logo.svg"
import { NavLink } from "react-router-dom"
const NavBarTop = () => {

    return (

        <div className={styles.logoAndNavContainer}>

            <div className={styles.logoContainer} aria-label="logo container">
                    <img src={logo} al="logo sport see"/>
            </div>



            <nav className={styles.container}>

                    
                <NavLink 
                        to="/"
                        className={({isActive, isPending}) => isPending ? styles.pending : isActive ? styles.active : ""}
                        >
                        Accueil
                </NavLink>

                <NavLink 
                        to="/profile"
                        className={({isActive, isPending}) => isPending ? styles.pending : isActive ? styles.active : ""}
                        >
                        Profil
                </NavLink>


                <NavLink 
                        to="/settings"
                        className={({isActive, isPending}) => isPending ? styles.pending : isActive ? styles.active : ""}
                        >
                        Réglages
                </NavLink>

                <NavLink 
                        to="/network"
                        className={({isActive, isPending}) => isPending ? styles.pending : isActive ? styles.active : ""}
                        >
                        Communauté
                </NavLink>



            </nav> 




        </div>
      
        
        
   

    )

}

export default NavBarTop