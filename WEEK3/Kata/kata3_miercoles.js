function getCount(str) {
    //I create a counter to store the number of matches
    var vowelsCount = 0;
    //I declare which are the vowels
    let vowelList = "aeiou"
    //I create a for loop to iterate through the given string
    for (let i = 0; i < str.length; i++) {
        //If the result of comparing the "[i] of the string" matches with the "indexOf() vowelList content" is true, it return 1, which is the same as saying "!== -1" (if the result is not -1)
        if (vowelList.indexOf(str[i]) !== -1) {
            //then add a +1 to the counter
            vowelsCount += 1
        }
    }
    return vowelsCount;
}


var whatTimeIsIt = function (angle) {
    //Declaro que los minutos son el doble que el ángulo 
    //(40 grados * 2 = 80 min, que traducido son la 1:20 am)
    mins = angle * 2;
    //Declaro que la hora que mostraremos es un math.floor de
    //la var mins entre 60, que da 1,3, redondeado a "1" hora
    hour = Math.floor(mins / 60);
    //Declaro que los minutes que mostraremos de
    //la var mins son un math.floor del resto de los minutos (80) modular 60 (una hora)
    //lo que da 20 minutos
    minutes = Math.floor(mins % 60);
    //Si la hora es igual a 0, son las 12:00
    if (hour == 0) {
        hour = "12";
    }
    //Si la hora es menor a las 10, se añade un 0 delante (0 + 1h = 01h)
    if (hour < 10) {
        hour = "0" + hour;
    }
    //Si los minutos son menores a 10, se añade un 0 delante (0+5m = 05m)
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hour + ":" + minutes;
}