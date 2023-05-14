import axios from "axios"


const PORT = 'http:localhost:3000'

export default {


    getUserMainData: async(id) => {

       const { data } = await axios.get(`${PORT}/user/${id}`)

       const modelizedData  = new Data


    },


    getUserActivity: async(id) => {

       
       return { data } = await axios.get(`${PORT}/user/${id}/activity`)

    },


    getUserAverageSession: async(id) => {

        return { data } = await axios.get(`${PORT}/user/${id}/average-sessions`)

    },


    getUserPerformance: async(id) => {

       return { data } = await axios.get(`${PORT}/user/${id}/performance`)

    },






}


