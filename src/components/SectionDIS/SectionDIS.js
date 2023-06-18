import React, { useEffect, useState } from "react"
import styles from "./SectionDIS.module.scss"
import { LineChart, Tooltip, Line, XAxis, YAxis, CartesianGrid, Cell, Legend, ResponsiveContainer,  RadarChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, Radar, PieChart, Pie} from "recharts"
import  { USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../../mock/mockDatabase"
import dayGetter from "../../utils/dayGetter"
import performanceFixer from "../../utils/performanceFixer"
import scoreHandler from "../../utils/scoreHandler"
import ApiService from "../../service/index"



const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className="label">{`${payload[0].value} mn`}</p>
        </div>
      );
    }
  
    return null;
  };
  


const CustomLegend = () => {

    return (

        <div className={styles.legendContainer}>


            <p> Durée moyenne des sessions</p>


        </div>
    )


}

const SectionDIS = () => {

    let id = 12
    //let uasRawData = USER_AVERAGE_SESSIONS.filter((o) => o.userId === id)[0].sessions;
    //let uasData = dayGetter(uasRawData)
    const [ uasData, setUASData ] = useState()

    //let upRawData = USER_PERFORMANCE.filter((o) => o.userId === id)[0].data;
    const [ upData, setUpData ] = useState()
    //let upData = performanceFixer(upRawData);

    const [ scoreData, setScoreData ] = useState()
    //let scoreRawData = USER_MAIN_DATA.filter((o) => o.id === id)[0]
    //let scoreData = scoreHandler(scoreRawData)





    useEffect(() => {

      const fetchData = async() => {


        let uasRawData = await ApiService.getUserAverageSession(id)
        setUASData(dayGetter(uasRawData.sessions))
        let upRawData = await ApiService.getUserPerformance(id)
        setUpData(performanceFixer(upRawData.data))
        let scoreRawData = await ApiService.getUserMainData(id)
        setScoreData(scoreHandler(scoreRawData))
      }

      fetchData()




    }, [])

  
    const COLORS = ["#FF0000", "#ffffff"];

    return (


        <section className={styles.container}>

            <article className={styles.durationContainer}>
            {uasData && <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart  data={uasData}
            >
                <CartesianGrid strokeDasharray="0 0"
                       horizontal={false}
                       vertical={false}
                
                />
                <XAxis dataKey="shortDay" axisLine={false} tickLine={0}/>
                <YAxis hide={true} />
                <Tooltip  content={<CustomTooltip/>}/>
                <Legend  
                   verticalAlign="top"
                   //width={100}
                   wrapperStyle={{
                 
                     flexDirection: "row",
               
                   }}
                
                content={<CustomLegend/>}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} strokeWidth={2}/>
             -
            </LineChart>
            </ResponsiveContainer>}



            </article>

            <article className={styles.intensityContainer}>

            {upData && <ResponsiveContainer  width={"100%"} height={"100%"}>

                <RadarChart outerRadius={90} width={730} height={250} data={upData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="completeKind" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar dataKey={"value"} fill="#FF0101" fillOpacity={0.6} />
                <Legend />
                </RadarChart>



            </ResponsiveContainer>}
         

                
            </article>


            <article className={styles.scoreContainer}>

                   <h4> Score </h4>

                   {scoreData && <ResponsiveContainer  width={"100%"} height={"100%"}>


                    <PieChart width={730} height={250}>

                      <Pie
                        data={scoreData}
                      
                        startAngle={180}
                        endAngle={-180}
                        paddingAngle={0}
                        innerRadius={70}
                        outerRadius={80}
                        fill="#ffffff"
                  
                        dataKey="value"
                      >
                          {scoreData.map((el, index) =>  

                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          
                          )}
                
                      
                      </Pie>
       


                    </PieChart>

                   </ResponsiveContainer>}


                   <p className={styles.percentage}>
                      <strong>12%</strong> <br/>
                      <span> de votre objectif        </span>
                   </p>
                            
                
            </article>


            
        </section>
    )




}


export default SectionDIS