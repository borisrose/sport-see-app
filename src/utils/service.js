import axios from "axios"
import { UserActivity } from "../models/UserActivity"
import { UserAverageSession } from "../models/UserAverageSession"
import { UserMainData } from "../models/UserMainData"
import { UserPerfomance } from "../models/UserPerformance"

const PORT = 'http:localhost:3000'

export default {


    getUserMainData: async(id) => {

      try {
         const { data } = await axios.get(`${PORT}/user/${id}`)
         
         

      }
      catch(e){
         console.error(e)
      }
      
    },


    getUserActivity: async(id) => {

       try {
         return { data } = await axios.get(`${PORT}/user/${id}/activity`)
       }
       catch(e){

         console.error(e)
       }

    },


    getUserAverageSession: async(id) => {

         try {
            return { data } = await axios.get(`${PORT}/user/${id}/average-sessions`)
         }
         catch(e){
            console.error(e)
         }

    },


    getUserPerformance: async(id) => {

      try {
         return { data } = await axios.get(`${PORT}/user/${id}/performance`)
      }
      catch(e){
         console.erro(e)
      }


    },






}


