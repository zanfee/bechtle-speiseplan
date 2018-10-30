function tick(){
    var hours, minutes, seconds, weekDay, day, month, year;
    var today;
    
    today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    weekDay = today.getDay();
    day = today.getDate();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    
    if (minutes < 10) {minutes = "0" + minutes}
    if (seconds < 10) {seconds = "0" + seconds}
    time = hours + ":" + minutes + ":" + seconds + " Uhr";
    clock.innerHTML = time;

    switch(weekDay){
        case 1: weekDay = "Samstag, ";
        case 2: weekDay = "Sonntag, ";
        case 3: weekDay = "Montag, ";
        case 4: weekDay = "Dienstag, ";
        case 5: weekDay = "Mittwoch, ";
        case 6: weekDay = "Donnerstag, ";
        case 7: weekDay = "Freitag, ";
    }
    week.innerHTML = weekDay;

    if (month < 10) {month = "0" + month}
    if (day < 10) {day = "0" + day}
    date_ = day + "." + month + "." + year;
    date.innerHTML = date_;

    window.setTimeout("tick();", 1000);
}
    
window.onload = tick;