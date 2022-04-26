// create object

let temp = {
    f: 72,
    c: function () {
        return Math.round((this.f - 32) * 5 / 9);
    }
}

// initialize dashboard

document.getElementById("Fahrenheit").innerHTML = temp.f + "&deg;F";
document.getElementById("Celsius").innerHTML = temp.c() + "&deg;C";

function warmer() {
    temp.f++;
    document.getElementById("Fahrenheit").innerHTML = temp.f + "&deg;F";
    document.getElementById("Celsius").innerHTML = temp.c() + "&deg;C";
}

function cooler() {
    temp.f--;
    document.getElementById("Fahrenheit").innerHTML = temp.f + "&deg;F";
    document.getElementById("Celsius").innerHTML = temp.c() + "&deg;C";
}