
class Session {

    constructor(day, kilogram, calories){

        this.day = typeof day !== 'string' ? day.toString() : day;
        this.kilogram = typeof kilogram !== 'number' ? parseFloat(kilogram) : kilogram;
        this.calories = typeof calories !== 'number' ? parseInt(calories, 10) : calories;
    }
}



export class UserActivity {


    constructor(userId, sessions){

        this.userId = typeof userId !== 'number' ? parseInt(userId, 10): userId;
        this.sessions = sessions.map(session=> new Session({...session}));
     
    }

    
    





}