import React from "react";
import styles from "./SectionDailyActivity.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { USER_ACTIVITY } from "../../mock/mockDatabase";
import indiceFixer from "../../utils/indiceFixer";




const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className="label">{`${payload[0].value} kg`}</p>
        <p className="label">{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

const CustomLegend = () => {
  return (
    <div className={styles.customLegend}>
      <div className={styles.dailyActivityTitle}>
        <p> Activité quotidienne </p>
      </div>
      <div className={styles.dailyActivityLegend}>
        <div className={styles.roundAndLabel}>
          <div className={styles.round}></div><p className={styles.label}>{`Poids (kg)`}</p>
        </div>
        <div className={styles.roundAndLabel}>
        <div className={styles.round}></div><p className={styles.label}>{`Calories brûlées (kCal)`}</p>
        </div>
      </div>
    </div>
  );
};

const SectionDailyActivity = () => {
  const id = 12;
  let rawData = USER_ACTIVITY.filter((o) => o.userId === id)[0].sessions;
  let  data = indiceFixer(rawData)
  console.log('data', data)

  return (
    <section className={styles.container}>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={300}
      
          data={data}
      
          barSize={10}
          
          barGap={10}

          legendType="circle"

        >
          <CartesianGrid
            strokeDasharray="0 2"
            strokeLinecap="round"
            strokeLinejoin="round"
            horizontal={true}
            vertical={false}
            
           
         
          />
          <XAxis 
            dataKey={"index"}
          />
          <YAxis
            //yAxisId="right"
            dataKey={"kilogram"}
            //hide={true}
            axisLine={false}
           
            
            orientation="right"
            stroke="#8884d8"
            //tickCount={1}
            type="number"
            tickSize={0}
            // axisLine={false}
            // tickLine={false}
            tickMargin={20}
            //minTickGap={9}
       
            domain={['dataMin', 'dataMax + 1']}
            interval={'preserveStartEnd'}
          
            //height={}
            
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            //width={100}
            wrapperStyle={{
              top: -70,
              right: 0,
              flexDirection: "row",
        
            }}
            content={<CustomLegend />}
          />
          <Bar
            //yAxisId="right"
            dataKey="kilogram"
            fill="#00000"
            descent={true}
            maxbarSize={30}
     
            
       
          />
          <Bar 
            dataKey="calories" 
            fill="#e80000" 
            maxBarSize={2}
   
            
    
        
        
       

          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default SectionDailyActivity;
