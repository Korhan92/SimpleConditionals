let point = prompt ('write your point')
 if (point > 89 && point <= 100){
     console.log('Your result is A')
 }else  if (point > 69 && point < 90){
    console.log('Your result is B')
}else  if (point > 59 && point < 70){
    console.log('Your result is C')
}else  if (point > 49 && point < 60){
    console.log('Your result is D')
}else  if (point >=0 && point < 50){
    console.log('Your result is F')
}else {
    console.log('Enter False')
}

//check season

let month = prompt ('write name of month').toLocaleLowerCase()
 if (month==='september' || month==='october'  || month==='november'){
     console.log('the season is autumn')
 }else  if (month==='december' || month==='january'  || month==='february'){
    console.log('the season is winter')
}else  if (month==='march' || month==='april'  || month==='may'){
    console.log('the season is spring')
}else  if (month==='june' || month==='july'  || month==='august'){
    console.log('the season is summer')
} else {
    console.log('enter false')
}

// month day 
month = prompt ("write your month").toLocaleLowerCase()

if (month =="april" || month =="june" || month =="september" || month =="november" || month =="december"){
    console.log(`${month} has 30 days `)
}else if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" ){
    console.log(`${month} has 31 days`)
}else if ( month == "february") {
    console.log (`${month} has 28 days`)
} else {
    console.log("wrong input")
}

