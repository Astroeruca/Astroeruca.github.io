// var zones = [
//     ["AoE", -12],
//     ["NUT", -11],
//     ["HST", -10],
//     ["MART", -9.5],
//     ["AKST", -9],
//     ["PST", -8],
//     ["MST", -7],
//     ["CST", -6],
//     ["EST", -5],
//     ["VET", -4],
//     ["NST", -3.5],
//     ["ART", -3],
//     ["GST", -2],
//     ["CVT", -1],
//     ["GMT", -0],
//     ["CET", 1],
//     ["EET", 2],
//     ["MSK", 3],
//     ["IRST", 3.5],
//     ["GST", 4],
//     ["AFT", 4.5],
//     ["UZT", 5]
// ];

var interval = setInterval(timer ,1000);
    function timer() {
    var time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleString();
    document.getElementById("zone").innerHTML = time.getTimezoneOffset() / 60;

}