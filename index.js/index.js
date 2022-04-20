let dvds = [{
            id : 0,
            titre : "titanic",
            description : "film triste",
            isRent: false},


             {
                id:1,
                titre:"ligne verte",
                description :"film triste",
                isRent: true ,
                          },



         {     
                 id:2,
                 titre:"star wars",
                description :"film dans l'espace",
                isRent: false,
               },


]

let dvd
do{

console.log("----------------------------------------------")
console.log("1:Afficher la liste des films en magasin")
console.log("2:Afficher la liste des films pas en magasin")
console.log("3:Afficher le liste des film  a louer ")
console.log("4:Rendre un film")
console.log("----------------------------------------------")
dvd = parseInt(prompt("que voulez vous faire"))
// 



switch(dvd)

{

    case 1 :
        dvds.forEach(element => {
            if(element.isRent===false){
            console.log(element)
            }
        });
        // 
        break;

      case 2 : 
        dvds.forEach(element => {
            if(element.isRent===true){
                console.log(element)
            }
        });

         break;

       case 3 :
        
      
        dvds.forEach(element => {
            if(element.isRent===false){
            console.log(element)
            }
        });
         
          rent = parseInt(prompt("choissisez votre film de 0 a 2"))
           console.log(rent)
         
           dvds[rent].isRent = true
             console.log(dvds[rent])
         break;



      case 4 :
        dvds.forEach(element => {
            if(element.isRent===true){
                console.log(element)
            }
        });


        give = parseInt(prompt("choissisez dans la liste le film que vus voulez rendre"))
          console.log(give)
         dvds[give].isRent = false
          
            console.log(dvds[give])



         break;

       case 5 :
           console.log("Disconnected")
           break;








        default :
        console.log("url not found")

} }

while(dvd!=5)



// const form=(document.getElementById("titre").textContent); 
// console.log(form)





// document.querySelector(".para1").innerText =form ; 




// document.querySelector(".titre").style.backgroundColor = 'green';



// let span = document.querySelectorAll("span")

// span.forEach(elem=> elem.style.backgroundColor = 'green')

// const para =  document.getElementById("para1").textContent



// function aff ()
// {
//     console.log(para)
// }







// function func ()
// {
//     let img = document.getElementById('onion')
//    let src = img.getAttribute('src')
//    console.log('src')

    
   
     

// }










