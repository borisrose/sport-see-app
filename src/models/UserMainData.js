class KeyData {

    constructor(calorieCount, proteinCount, carbohydrateCount, lipidCount) {

        this.calorieCount = typeof calorieCount !== 'number' ? parseInt(calorieCount, 10) : calorieCount ;
        this.proteinCount = typeof proteinCount !==  'number' ? parseInt(proteinCount, 10) : proteinCount ;
        this.carbohydrateCount = typeof carbohydrateCount !==  'number' ? parseInt(carbohydrateCount, 10) : carbohydrateCount;
        this.lipidCount = typeof lipidCount !== 'number' ? parseInt(lipidCount, 10) : lipidCount ;

    }

}


class UserInfo {

    constructor(firstName, lastName, age){

        this.firstName = typeof firstName !== 'string' ? firstName.toString() : firstName;
        this.lastName =  typeof lastName !== 'string' ? lastName.toString() : lastName;
        this.age = typeof age !== 'number' ? parseInt(age, 10) : age;
    }
}




export class UserMainData {


    constructor(id, userInfos, todayScore, keyData){

        this.id = typeof id !== 'number' ? parseInt(id, 10): id;
        this.userInfo = new UserInfo(userInfos.firstName, userInfos.lastName, userInfos.age); 
        this.todayScore =  typeof todayScore !== 'number' ? parseInt(todayScore, 10): todayScore;
        this.keyData = new KeyData(keyData.calorieCount, keyData.proteinCount, keyData.carbohydrateCount, keyData.lipidCount);
    }


    





}