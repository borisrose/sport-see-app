
class DataItem {

    constructor(value, kind){
        this.value = value;
        this.kind = kind;
    }
}

class UserPerformance {

    kind = {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
    }

    constructor(userId,data){
        this.userId = typeof userId !== 'number' ? parseInt(userId, 10) : userId;
        this.data = data.map(d => new DataItem(d.value, d.king))
    }

}