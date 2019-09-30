/*
//Test Questions
let a = Number(prompt('Principal'))
let b = Number(prompt('Length'))
let c = Number(prompt('rate'))
*/
function carLoanPayment(a,b,c) {
  let principal = a
  let length = b
  let rate = c/1200
  let rate1 = Math.pow((1+rate),length)
  let payment= principal*rate*rate1 /(rate1 - 1)
  return payment
  
}
//alert(carLoanPayment(a,b,c))

function homeLoanPayment(a,b,c) {
  let principal = a
  let length = b*12
  let rate = c/1200
  let rate1 = Math.pow((1+rate),length)
  let payment= principal*rate*rate1 /(rate1 - 1)
  return payment
}
//alert(homeLoanPayment(a,b,c))

for(i=0; i="STOP";i++){
  i = prompt('We have different loan calculators for you. Would you like Car or Home?')
 switch(i){
case 'Car':
  let amountCar = Number(prompt('How much will the car cost?'))
  let timeFrameCar = Number(prompt('How many months will you be paying on the car?'))
  let interestCar = Number(prompt('What will your interest rate be on the car?'))
  alert(`A home loan for $${amountCar} over ${timeFrameCar} months at ${interestCar}% interest would have a monthly payment of ${carLoanPayment(amountCar,timeFrameCar,interestCar)}.`)
  break;
case 'Home':
  let amount = Number(prompt('How much will the house cost?'))
  let timeFrame = Number(prompt('How many years will you be paying on the house?'))
  let interest = Number(prompt('What will your interest rate be on the house?'))
  alert(`A home loan for $${amosunt} over ${timeFrame} years at ${interest}% interest would have a monthly payment of ${homeLoanPayment(amount,timeFrame,interest)}.`)
  break;
case 'STOP':
    break;
default:
  alert('Sorry that is not an option. Choose either Car or Home. If you would like to end this type STOP on the following prompt')
 }
}
