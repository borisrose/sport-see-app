export default (data) => {

    let newArray = []

    console.log('data in dayGette', data)
    data.forEach(element => {
        
        if(element.day === 1) {
            element.fullDay = "Lundi"
            element.shortDay = "L"
        }


        if(element.day === 2) {
            element.fullDay = "Mardi"
            element.shortDay = "M"
        }


        if(element.day === 3) {
            element.fullDay = "Mercredi"
            element.shortDay = "M"
        }


        if(element.day === 4) {
            element.fullDay = "Jeudi"
            element.shortDay = "J"
        }


        if(element.day === 5) {
            element.fullDay = "Vendredi"
            element.shortDay = "V"
        }


        if(element.day === 6) {
            element.fullDay = "Samedi"
            element.shortDay = "S"
        }


        if(element.day === 7) {
            element.fullDay = "Dimanche"
            element.shortDay = "D"
        }


        newArray.push(element)
    });



    console.log('newArray', newArray)
    return newArray

}