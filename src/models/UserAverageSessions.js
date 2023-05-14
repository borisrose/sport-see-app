
class Session {

    constructor(day, session){

        this.day = typeof day !== 'number' ? parseInt(day) : day;
        this.session = typeof session !== 'string' ? session.toString() : session;
    }

}



export class UserAverageSessions {


    constructor(userId, sessions){
      
        this.userId = typeof userId !== 'number' ? parseInt(userId, 10): userId;
        this.sessions = sessions.map(session => new Session(session.day, session.session))
    }


}