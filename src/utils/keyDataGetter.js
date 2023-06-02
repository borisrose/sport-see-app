export default (user_data) => {

    // calorieCount: 2500,
    // proteinCount: 90,
    // carbohydrateCount: 150,
    // lipidCount: 120

    let newArray = []

    if(user_data.keyData){



        newArray.push( {name: 'Calories' , value :user_data.keyData['calorieCount']})
        newArray.push( {name: 'Proteines' , value :user_data.keyData['proteinCount']})
        newArray.push( {name: 'Glucides' , value :user_data.keyData['carbohydrateCount']})
        newArray.push( {name: 'Lipides' , value :user_data.keyData['lipidCount']})
    }


    return newArray



}