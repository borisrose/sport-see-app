import React, {useState, useEffect } from "react"
import SectionDailyActivity from "../SectionDailyActivity/SectionDailyActivity"
import SectionDIS from "../SectionDIS/SectionDIS"
import AsideCPGL from "../AsideCPGL/AsideCPGL"
import styles from"./Dashboard.module.scss"
import ApiService from "../../service/index"
import connectionTest from "../../utils/connection-test"
import Message from "../Message/Message"

const Dashboard = () => {



    const [ data, setData] = useState()
    const [isApiConntected, setIsApiConntected] = useState(true)

    const id = 12
    useEffect(() => {



        const testApiConnection = async(id) => {
            

            console.log('into testApiConnection in Dashboard')
            const testResult = await connectionTest(id)
            console.log('test result: ' + testResult)

            if(!testResult){

                setIsApiConntected(false)
                setTimeout(() => {


                    setIsApiConntected(true)

                }, 3000)
            }
            else {

                setIsApiConntected(true)
            }

        }



        testApiConnection(id)
    



        const fetchData = async() => {

            const rawData = await ApiService.getUserMainData(id)
            setData(rawData)

        }


        fetchData()

    }, [])


    useEffect(() => {


        console.log('data in Dashboard', data)

    }, [data])

    return (

    
        <div className={styles.container}>
            
            <div className={styles.leftContainer}>

                {!isApiConntected && <Message/>}

                <header>

                {data &&   <h1>Bonjour {data.userInfo.firstName}</h1>}
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