/*
You are creating an app for a financial institution to give out free to customers. 
It will provide them a way to calculate monthly payments for car loans and home loans 
given a specific amount of the loan, timeframe, and interest rate.
Assume no down-payments. 
a function named carLoanPayment that takes 3 arguments and returns the monthly payment to the main program. 
a function named homeLoanPayment that takes 3 arguments and returns the monthly payment to the main program.  Term can only be 15 or 30 years.
main program that asks the user which calculator they want to use, gets their data and calls the function. 
main program that gets the answer back from the function and outputs it to an alert in this format: 
     A home loan for $200,000 over 30 years at 5.7% interest would have a monthly payment of $1160.80.
OR
     A car loan for $30,000 over 60 months at 3.2% interest would have a monthly payment of $542.00
The program must keep running until the user says they want to stop running it.
Hint: a loop would be handy here....
GitHub - you must have a repository for the Fixit with
an initial master of the project on GitHub.com (basically your project before you do anything.
a branch named 'car loan' for when you are creating, testing, getting the car loan part of the program to work. Then merge this branch with the current (initial) master when it is ready to go.
a branch named 'home loan' for when you are creating, testing, getting the home loan part of the program to work. Then merge this branch with the current master (has the car loan part in it) to get the 'finished' program. 

GitHub keeps a history, so I can see the timeline of these activities in your GitHub.com repository.
copy the GitHub.com url (under the Download/Clone button) and put it on a Word doc with your name. 
*/
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
  let interestCar = Number(prompt('What will your interest rate be on the house?'))
  alert(`A home loan for $ ${amountCar} over ${timeFrameCar} months at ${interestCar}% interest would have a monthly payment of ${carLoanPayment(amountCar,timeFrameCar,interestCar)}.`)
  break;
case 'Home':
  let amount = Number(prompt('How much will the house cost?'))
  let timeFrame = Number(prompt('How many years will you be paying on the house?'))
  let interest = Number(prompt('What will your interest rate be on the house?'))
  alert(`A home loan for $ ${amount} over ${timeFrame} years at ${interest}% interest would have a monthly payment of ${homeLoanPayment(amount,timeFrame,interest)}.`)
  break;
default:
  alert('Sorry that is not an option. Choose either Car or Home. If you would like to end this type STOP on the following prompt')
 }
}
/*
if (i.toLowerCase= 'home') {
  let amount = Number(prompt('How much will the house cost?'))
  let timeFrame = Number(prompt('How many years will you be paying on the house?'))
  let interest = Number(prompt('What will your interest rate be on the house?'))
  alert(`A home loan for $ ${amount} over ${timeFrame} years at ${interest}% interest would have a monthly payment of ${homeLoanPayment(amount,timeFrame,interest)}.`)
} else if (i.toLowerCase= 'car'){
  let amount = Number(prompt('How much will the car cost?'))
  let timeFrame = Number(prompt('How many months will you be paying on the car?'))
  let interest = Number(prompt('What will your interest rate be on the house?'))
  alert(`A home loan for $ ${amount} over ${timeFrame} months at ${interest}% interest would have a monthly payment of ${carLoanPayment(amount,timeFrame,interest)}.`)
} else {
  let i =prompt('Sorry that is not an option: please choose again or say STOP')
}
*/