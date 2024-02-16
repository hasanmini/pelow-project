// function cup(moyna){
//     let mi=0;
//     for (const me of moyna){
//         mi+=me;

//     }
//     return mi;
// }
// let moynarma= [10,39,20,38];
// const put=cup(moynarma);
// console.log('dekha to bisoy ta ' + put);




// assignment 4 task 1///////////////////////////////////////


function calculateMoney(ticket){
    let totalSale = ticket;
    totalSale *= 120;
    const watchMen = 500;
    const stufLunchCost = 50 * 8;
    const totalCost = watchMen + stufLunchCost;
    const totalRevenue = totalSale - totalCost;
    if(ticket>0){
        "Total revenue is: " + totalRevenue;
        return totalRevenue;
    }
    else{
       return "Invalid Numbers";
    }
    
}
// const totalRevenue= (calculateMoney(2));
// console.log(totalRevenue)

//assignment 4 task 2
function checkName(name){
    if(typeof name === "string"){
        if(name.charAt(name.length - 1) === 'a' ||name.charAt(name.length - 1) === 'y' ||name.charAt(name.length - 1) === 'i' ||name.charAt(name.length - 1) === 'e' ||name.charAt(name.length - 1) === 'o' ||name.charAt(name.length - 1) === 'u' ||name.charAt(name.length - 1) === 'w' ){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "Invalid"; 
    }
}
// const ks=(checkName(['hs']));
// console.log(ks)


//assignment 4 task 3



// function deleteInvalids(array){
//     let onlyNumber = [];
//     for (let i = 0; i <array.length; i++){
//         onlyNumber.push(array[i])  
//     }
//     if(typeof onlyNumber ==="number"){
//         return onlyNumber;
//     }
//     return onlyNumber;
}
// let i = deleteInvalids(['1', 27, 39, {num:2} , NaN]);
// console.log(i)



function deleteInvalids(inputArray) {
    let onlyNumber = [];
    for (let i = 0; i <array.length; i++){
        onlyNumber.push(array[i])  
    }
    let onlyNumbers = inputArray.filter(item => typeof item === 'number' && !isNaN(item));
    return onlyNumbers;
  }
  const d = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] );
  console.log(d)



// function removeNaNFromArray(inputArray) {
//     let filteredArray = inputArray.filter(item => !isNaN(item));
  
//     return filteredArray;
//   }
  
//   const input = [1, 2, NaN, 3, 'a', NaN, 4];
//   const output = removeNaNFromArray(input);
//   console.log(output); // [1, 2, 3, 'a', 4]
function deleteInvalids(array){
    return array.filter(item => typeof item === "number");
}
// const Dhoni = deleteInvalids({num: [ 1 , 2 , 3 ]} );
// console.log(Dhoni)
//assignment 4 task 4
function password(object){
    if(object.birthYear < 9999 && object.birthYear > 1000){
        let capitalFirstLetter = object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1);
        return capitalFirstLetter + "#" + object.name + "@" + object.birthYear;
    }
    else{
        return "invalid";
    }
}

let kolimUddin={
    siteName: "honi",
    name: "hasan",
    birthYear: "2001"
}
// console.log(password(kolimUddin));

//assignment 4 task 5

function monthlySavings(allPayments, livingCost){
    if(!Array.isArray(allPayments) || typeof livingCost == "number"){
        let totalRevenue = 0;
        for(let payments of allPayments){
            if(payments >= 3000){
                let tax = (20/100) * payments;
                payments = payments - tax;
            }
            totalRevenue = totalRevenue + payments;
        }
        let totalSavings = totalRevenue - livingCost;
        if( totalSavings > 0){
            return totalSavings
        }
        else{
            return "earn more"
        }
    }    
}

let ids = monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
// console.log(ids)