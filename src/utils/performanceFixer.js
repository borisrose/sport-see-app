export default (dataBeforeBeingReversed) => {



    let newArray = []

    let reversedArray = []

    dataBeforeBeingReversed.forEach(el => {


        if(el.kind === 6){
            reversedArray[0] = el
        }

        if(el.kind === 5){
            reversedArray[1] = el
        }

        if(el.kind === 4){
            reversedArray[2] = el
        }


        if(el.kind === 3){
            reversedArray[3] = el
        }

        if(el.kind === 2){
            reversedArray[4] = el
        }

        if(el.kind === 1){
            reversedArray[5] = el
        }

      
    })


    
    reversedArray.forEach((el) => {

        if(el.kind === 1){

            el.completeKind = 'Cardio'
        }

        if(el.kind === 2){
            el.completeKind = 'Energie'
        }

        if(el.kind === 3){
            el.completeKind = 'Endurance'
        }

        if(el.kind === 4){
            el.completeKind = 'Force'
        }

        if(el.kind === 5){
            el.completeKind = 'Vitesse'
        }


        if(el.kind === 6){
            el.completeKind = 'Intensité'
        }

        newArray.push(el)

    })


    return newArray



}