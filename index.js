function scuberGreetingForFeet(feet){
  let ridePrice;
  if (feet <= 199) {
    ridePrice = "This one is on me!"
  } else if (feet >= 200 && feet <= 2499){
    ridePrice = "I will gladly take your thirty bucks."
  } else {
    ridePrice = "No can do."
  }
  return ridePrice;
  // Write your code here!
}

function ternaryCheckCity(city){
  let choice;
  if (city === "NYC") {
    choice = 'Ok, sounds good.'
  } else {
    choice = "No go."
  }
  return choice;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let generosity;
  if (tip === "generous") {
    generosity = "Thank you so much."
  } else if (tip === "not as generous") {
    generosity = "Thank you."
  } else {
    generosity = "Bye."
  }
  return generosity;
  // Write your code here!
}