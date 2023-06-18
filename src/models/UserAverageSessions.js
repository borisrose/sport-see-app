
class Session {

    constructor(day, sessionLength){

        this.day = typeof day !== 'number' ? parseInt(day) : day;
        this.sessionLength = typeof sessionLength !== 'string' ? sessionLength.toString() : sessionLength;
    }

}



export class UserAverageSessions {


    constructor(userId, sessions){
      
        this.userId = typeof userId !== 'number' ? parseInt(userId, 10): userId;
        this.sessions = sessions.map(session => new Session(session.day, session.sessionLength))
    }


}