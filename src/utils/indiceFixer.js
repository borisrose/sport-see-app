export default (arrayToChange) => {


    let newArray = []

    arrayToChange.forEach((e) => {
          
        e.index = arrayToChange.findIndex(el => el === e) + 1
        newArray.push(e)
    })


    return newArray

}