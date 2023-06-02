export default (user_data) => {


    console.log('user_data', user_data)

   const newArray = []

    if(user_data.todayScore){


        const score_on_100  = user_data.todayScore * 100
        console.log('score on 100', score_on_100)
        const left_on_100 = 100 - score_on_100
        console.log('left_on_100', left_on_100)

        
        newArray.push(
            { name: "user_score", value: score_on_100 },   
        )


        newArray.push({ name: "user_anti_score", value: left_on_100 },)














    }

    return newArray



}