let d = new Date();
let timestamp = d.getTime();
console.log(timestamp);

// Today - Date
console.log(d.toLocaleDateString('en-GB'));
// today - time
console.log(d.toLocaleTimeString('en-GB'));
// tomorrow - date
console.log(d.toLocaleDateString('en-GB',d.setDate(d.getDate()+1)));