function tick(){
    var time, hours, minutes, seconds, weekDay, day, month, year;

    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    weekDay = time.getDay();
    day = time.getDate();
    month = time.getMonth() + 1;
    year = time.getFullYear();

    if (minutes < 10) {minutes = "0" + minutes}
    if (seconds < 10) {seconds = "0" + seconds}
    time = hours + ":" + minutes + ":" + seconds + " Uhr";
    clock.innerHTML = time;

    switch(weekDay){
        case 1: weekDay = "Montag, ";
            break;
        case 2: weekDay = "Dienstag, ";
            break;
        case 3: weekDay = "Mittwoch, ";
            break;
        case 4: weekDay = "Donnerstag, ";
            break;
        case 5: weekDay = "Freitag, ";
            break;
        case 6: weekDay = "Samstag, ";
            break;
        case 7: weekDay = "Sonntag, ";
            break;
    }

    if (month < 10) {month = "0" + month}
    if (day < 10) {day = "0" + day}
    getDate = weekDay.bold() + day + "." + month + "." + year;
    date.innerHTML = getDate;

    window.setTimeout("tick();", 1000);
}

window.onload = tick;