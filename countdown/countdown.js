const months = [
    "January",
    "Febuary",
    "MArch",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const giveaway = document.getElementById('giveaway');
const items = document.querySelectorAll('.deadline-format h4')
const deadline = document.querySelector('.deadline')

var tempDate = new Date();

var tempYear = tempDate.getFullYear();
var tempMonth = tempDate.getMonth();
var tempDay =tempDate.getDate();

const futureTime = new Date(tempYear,tempMonth,tempDay + 10, 9, 0, 0 )

var weekday = weekdays[futureTime.getDay()];
var day = futureTime.getDate();
var year = futureTime.getFullYear();
var month = months[futureTime.getMonth()];
var hour = futureTime.getHours();
var minutes = futureTime.getMinutes();
var sec = futureTime.getSeconds()


giveaway.textContent = `The giveaway ends on  ${day}th ${month} ${weekday} ${year} ${`0${hour}`}:${`0${minutes}`}:${`0${sec}pm`}`



function myFunction(){
    const today = new Date().getTime();
    var t = futureTime - today;
    // console.log(t)
    // console.log(today)
    // console.log(futureTime.getDate())

    var oneDay = 24 * 60 * 60 * 1000;
    var oneHour = 60 * 60 * 1000;
    var oneMin = 60 * 1000;
    var oneSec = 1000;

    var days = t / oneDay;
    days = Math.floor(days)
   

    var hours = Math.floor((t % oneDay) / oneHour);
   

    var min = Math.floor((t % oneHour) / oneMin)
   

    var sec = Math.floor((t % oneMin) / oneSec)
   

    function format(item){
        if(item < 10){
            return(item = `0${item}`)
        }
        return item;
    }
   
   

    var value = [days, hours, min, sec];

    items.forEach(function(item, index){
        item.innerHTML = format(value[index])
    });
    
    
    // var add = document.getElementById('sec')
    // add.innerHTML = sec;
    // var add = document.getElementById('min')
    // add.innerHTML = min;
    // var add = document.getElementById('hour')
    // add.innerHTML = hours;
    // var add = document.getElementById('day')
    // add.innerHTML = days;


    // var min = t / oneMin;
    // min= Math.floor(min);
    // console.log(min)
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h1>Sorry this Giveaway already expired!</h1>`
    };
}
let countdown = setInterval(myFunction, 1000)
myFunction();






