import React from "react"
import styles from "./NavBarLeft.module.scss"
import zen from "../../assets/svg/zen.svg"
import swimmer from "../../assets/svg/swimmer.svg"
import rider from "../../assets/svg/rider.svg"
import bodybuilder from "../../assets/svg/bodybuilder.svg"


const NavBarLeft = () => {

    return (
        <div className={styles.iconsAndCopyContainer}>


            <nav className={styles.container}>
                <ul>

                    <li className={styles.iconContainer}>
                        <img src={zen} alt=""/>
                    </li>

                    <li className={styles.iconContainer}>
                        <img src={swimmer} alt=""/>
                    </li>

                    <li className={styles.iconContainer}>
                        <img src={rider} alt=""/>
                    </li>

                    <li className={styles.iconContainer}>
                        <img src={bodybuilder} alt=""/>
                    </li>
                  
                </ul>

            </nav> 


            <div className={styles.copyContainer}>


                <p>Copiryght, SportSee 2020</p>



            </div>




        </div>
      
    )

}

export default NavBarLeft