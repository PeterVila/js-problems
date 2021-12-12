function timeConversion(s) {
    let amPM = s.charAt(8);
    let militaryHour = "";
    if (amPM === "A") {
        if (s.substring(0, 2) === "12") {
            militaryHour = "00";
        } else {
            militaryHour = s.substring(0, 2);
        }
    } else {
        if (s.substring(0, 2) === "12") {
            militaryHour = s.substring(0, 2);
        } else {
            militaryHour = parseInt(s.substring(0, 2), 10) + 12;
        }
    }
    return militaryHour + s.substring(2, 8);
}

/*
Set a var to be A or P in the string (AM or PM)
Set the output for military time
If the var we grabbed is "A"
    If the first 2 indexes of the substring       is "12", set it to "00"
    Else, means it's correct and just set it      in military time
Else if the var is "P"
    If the first two indexes is "12" Leave it      it be
    Else, Add 12 to the string given (parseInt)

Return military Hour + the rest of the string given
*/