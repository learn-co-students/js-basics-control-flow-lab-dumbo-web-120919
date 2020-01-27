function scuberGreetingForFeet(someFeet){

  let result 
  if (someFeet <= 400 ) {
    result = "This one is on me!"

  } else if (someFeet > 2500) {
    result = "No can do."
  
  } else if (someFeet > 2000) {
    result = "I will gladly take your thirty bucks."    
  }

  return result 
}

function ternaryCheckCity(place){
  
   return place === "NYC" ? place = "Ok, sounds good." : place = "No go.";
  // if (passenger == "NYC") {
  //   something = "Ok, sounds good."
  // }
}

function switchOnCharmFromTip(tip){
  switch (tip) {

    case 'generous':
      return "Thank you so much."
      break;

    case 'not as generous':
      return "Thank you."
      break;

    default:
        return 'Bye.' 

  }
}