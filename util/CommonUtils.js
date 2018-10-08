exports.generateId = function(type) {
    let map = { 'C': '3'};
    let randomNumber = '';
    if (type) {
        randomNumber = map[type]  + Math.floor(Math.random() * 100) + 10 + '';
    } else {
        randomNumber = Math.floor(Math.random() * 1000) + 100 + '';
    }
 
    let utcDate = new Date(),
        year = utcDate.getUTCFullYear(),
        month = utcDate.getUTCMonth(),
        date = utcDate.getUTCDate(),
        hour = utcDate.getUTCHours(),
        min = utcDate.getUTCMinutes(),
        sec = utcDate.getUTCSeconds(),
        ms = utcDate.getUTCMilliseconds();

    randomNumber += (date < 10 ? '0' + date : date);
    randomNumber += (month < 10 ? '0' + month : month);
    randomNumber += year ;
    randomNumber += (hour < 10 ? '0' + hour : hour);
    randomNumber += (min < 10 ? '0' + min : min);
    randomNumber += (sec < 10 ? '0' + min : sec);
    randomNumber += ms ;

    return randomNumber;
}