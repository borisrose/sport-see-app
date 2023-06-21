import axios from "axios"
import { UserActivity } from "../models/UserActivity"
import { UserMainData } from "../models/UserMainData"
import { UserPerformance } from "../models/UserPerformance"
import { UserAverageSessions } from "../models/UserAverageSessions"
import {
   USER_MAIN_DATA,
   USER_ACTIVITY,
   USER_AVERAGE_SESSIONS,
   USER_PERFORMANCE
} from "../mock/mockDatabase"

const PORT = 'http://localhost:3300'

export default {


    getUserMainData: async(id) => {

      console.log('in getUserMainData')

      try {
         const { data } =  await axios.get(`${PORT}/user/${id}`)

         console.log('data.data in getUserMainData', data.data)
         
         if(!data.data.todayScore){      
            
            //retunr USERMAIN_DATA.fiter
            return new UserMainData(data.data.id, data.data.userInfos, data.data.score, data.data.keyData)
         }
         else {
            return new UserMainData(data.data.id, data.data.userInfos, data.data.todayScore, data.data.keyData)
         }

      
         
         

      }
      catch(e){
         console.error(e)



         const data = USER_MAIN_DATA.find(u => u.id === id)
         if(!data.todayScore){
            return new UserMainData(data.id, data.userInfos,data.score, data.keyData)

         }
         else {
            return new UserMainData(data.id, data.userInfos, data.todayScore, data.keyData)

         }
      

      }


      
    },


    getUserActivity: async(id) => {

      console.log('in getUserActivity')

       try {
         const { data } = await axios.get(`${PORT}/user/${id}/activity`)

         console.log('data.data', data.data)
         
         return new UserActivity(data.data.userId, data.data.sessions)


       }
       catch(e){

         console.error(e)

         const data = USER_ACTIVITY.find(u => u.userId === id)

         return new UserActivity(data.userId, data.sessions)

         
       }

    },


    getUserAverageSession: async(id) => {


         console.log('in getUserAverageSession')

         try {
            const { data } = await axios.get(`${PORT}/user/${id}/average-sessions`)

            console.log('data.data in getUserAverageSession', data.data)
            return new UserAverageSessions(data.data.userId,data.data.sessions)
         }
         catch(e){
            console.error(e)

            const data = USER_AVERAGE_SESSIONS.find(u => u.userId === id)

            return new UserAverageSessions(data.userId,data.sessions)

         }

    },


    getUserPerformance: async(id) => {

      console.log('in getUserPerformance')

      try {
         const { data } = await axios.get(`${PORT}/user/${id}/performance`)
         return new UserPerformance(data.data.id,data.data.data)
      }
      catch(e){

         console.error(e)

         const data = USER_PERFORMANCE.find(u => u.userId === id)

         console.log("performance -->",data)
         return new UserPerformance(data.userId, data.data)

      }


    },






}


