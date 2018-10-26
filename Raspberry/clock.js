function tick(){
    var hours, minutes, seconds, weekDay, day, month, year;
    var HoursCount, MinutesCount, SecondCount, WeekDayCount, DayCount, MonthCount, YearCount;
    var today;
    
    today = new Date();
    HoursCount = today.getHours();
    MinutesCount = today.getMinutes();
    SecondCount = today.getSeconds();
    WeekDayCount = today.getDay();
    DayCount = today.getDate();
    MonthCount = today.getMonth() + 1;
    YearCount = today.getFullYear();
    
    hours = HoursCount+":";
    if (MinutesCount < 10) {minutes = "0" + MinutesCount + ":";}
        else {minutes = MinutesCount + ":";}
    if (SecondCount < 10) {seconds = "0" + SecondCount + " ";}
        else {seconds = SecondCount + " ";}
    time = hours + minutes + seconds + " Uhr";
    clock.innerHTML = time;

    switch(WeekDayCount){
        case 1: weekDay = "Samstag, ";
        case 2: weekDay = "Sonntag, ";
        case 3: weekDay = "Montag, ";
        case 4: weekDay = "Dienstag, ";
        case 5: weekDay = "Mittwoch, ";
        case 6: weekDay = "Donnerstag, ";
        case 7: weekDay = "Freitag, ";
    }
    week.innerHTML = weekDay;

    year = YearCount;
    if (MonthCount < 10) {month = "0" + MonthCount + ".";}
        else {month = MonthCount + ".";}
    if (DayCount < 10) {day = "0" + DayCount + ".";}
        else {day = DayCount + ".";}
    date_ = day + month + year;
    date.innerHTML = date_;
    
    window.setTimeout("tick();", 1000);
}
    
window.onload = tick;