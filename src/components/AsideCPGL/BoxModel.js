import proteine from "../../assets/svg/protein.svg"
import glucide from "../../assets/svg/glucide.svg"
import lipide from "../../assets/svg/lipide.svg"
import calories from "../../assets/svg/calories.svg"
import styles from "./BoxModel.module.scss"
import kCalConverter from "../../utils/kCalConverter"


const BoxModel = ({name, value}) => {


    return(

        <article className={styles.container}>
            <div className={styles.boxImageContainer}>
                <img src={
                    name === 'Proteines' 
                    ? proteine : name === 'Glucides' 
                    ? glucide : name === 'Lipides' 
                    ? lipide : name === 'Calories' 
                ? calories : null} alt={name} />
            </div>

            <div className={styles.boxInfoContainer}>

                <div class={styles.boxInfoDesingContainer}>

                    <p>{name === 'Calories' ? `${kCalConverter(value)}kCal` : `${value}g`}</p>
                    <p>{name}</p>
                </div>
              
            </div>
        </article>

    )
}

export default BoxModel