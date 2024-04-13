//fetch promise return krta ha
//required Api
//async and await is short method then fetch

 let url = "https://jsonplaceholder.typicode.com/posts/1"

fetch

 let fetchData = fetch(url)
 .then((res)=>(res.json()))
  .then(data=>console.log(data))
  .catch(err=>console.log(err));

  console.log(fetchData)

// async and await

 let func = async()=>{
     let fetchData = await fetch(url)

     let res = await fetchData.json()

     console.log(res)

   return res 
}
 func()



//try catch
//syncronasily(line by line)
//asyncronasily
//error handling


console.log("start")

async function f1(){

    try{
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let res = await fetchData.json()

    console.log(res)
    }catch (error){
console.log("Error in Api")
    }
    
}
f1()

console.log("end")
