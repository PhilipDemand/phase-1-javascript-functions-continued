function saturdayFun(activity = 'roller-skate') {
  let saturdayWishes = `This Saturday, I want to ${activity}!`
  return saturdayWishes
}

const mondayWork = function (activity = "go to the office") {
    let message = `This Monday, I will ${activity}.`
    return message
}

function wrapAdjective(flare = "*") {  
    return function (adjective = 'special') {
        let anotherVariable = `You are ${flare}${adjective}${flare}!`
        return anotherVariable
      }
    }