export default async(id) => {

    console.log('into tester in utils 2')

    try {

        const res = await fetch(`http://localhost:3300/user/${id}`)
        return true

    }
    catch(err){

        console.log(err)
        return false
    }
  

 



    



}