// // const calcArea = function(radius){
// //     let area = 3.14 * (radius)**2 
// //     return area
// // }
// // const area = calcArea(4)
// // console.log(area)

// // const calcVol = function(height){
// //     let vol = area * (height)
// //     return vol 
// // } 

// // const vol = calcVol(5)
// // console.log(vol)
// const name = ['teddy','greg','christine']
// for(let i=0; i < name.length; i++){
//     console.log(name[i])
// }

// const bill = function(products, tax){
//     let total = 0
//     for(i=0; i<products.length; i++){
//         total += products[i] + products[i]*tax  
//     }
//     return total
// }
// console.log(bill([30,40,50,60], 0.5))

const bill = (products, tax) => {
    let total = 0
for (i=0; i<products.length; i++){
    total += products[i] + products[i]*tax
}  
return total
}
console.log(bill([30,40,50,60], 0.5))

// const greet = function(){
//     return 'hello, world'
// }
// result = greet()
// console.log(result)
const greet = () => 'hello, world'
result = greet()
console.log(result) 