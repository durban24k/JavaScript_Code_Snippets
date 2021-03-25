let d = new Date();
let timestamp = d.getTime();
console.log(timestamp);

// Today - Date
console.log(d.toLocaleDateString('en-GB'));
// today - time
console.log(d.toLocaleTimeString('en-GB'));
// tomorrow - date
console.log(d.toLocaleDateString('en-GB',d.setDate(d.getDate()+1)));

function addDays(days){
     let date = new Date();
     return date.toLocaleDateString('en-GB',date.setDate(date.getDate()+days))
}
console.log(addDays(0))
console.log(addDays(10));
console.log(addDays(30));