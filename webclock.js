//Web Clock by Jake Mandell - 2015

//MAIN FUNCTION--resets every second
function main() {

    //get time + initialize vars
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var h1 = 0;
    var h2 = 0;
    var m1 = 0;
    var m2 = 0;
    var s1 = 0;
    var s2 = 0;

    //add zeros to 0-9 numbers
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    //splits numbers into individual digits
    h = h.toString();
    h1 = h.slice(0,1);
    h2 = h.slice(1,2);
    h1 = parseInt(h1);
    h2 = parseInt(h2);

    m = m.toString();
    m1 = m.slice(0,1);
    m2 = m.slice(1,2);
    m1 = parseInt(m1);
    m2 = parseInt(m2);

    s = s.toString();
    s1 = s.slice(0,1);
    s2 = s.slice(1,2);
    s1 = parseInt(s1);
    s2 = parseInt(s2);

    //turn off all on loop start
    if ($('div').hasClass("on")) {
        $('.on').addClass("off");
        $('.off').removeClass("on");
    } else if ($('div').hasClass("on2")) {
        $('.on2').addClass("off");
        $('.off').removeClass("on2");
    } else if ($('div').hasClass("off2")) {
        $('.off2').addClass("off");
        $('.off2').removeClass("off2");
    }


    //assign each digit to specific number function
    assignToFunction("h1", h1);
    assignToFunction("h2", h2);
    assignToFunction("m1", m1);
    assignToFunction("m2", m2);
    assignToFunction("s1", s1);
    assignToFunction("s2", s2);


    //blinking seperators

        $("#b1-13, #b1-23, #b2-13, #b2-23").addClass("on");
        $("#b1-13, #b1-23, #b2-13, #b2-23").removeClass("off");

    setTimeout( function(){
        $("#b1-13, #b1-23, #b2-13, #b2-23").addClass("off");
        $("#b1-13, #b1-23, #b2-13, #b2-23").removeClass("on");
        $("#b1-13, #b1-23, #b2-13, #b2-23").removeClass("on2");

        checkIfDark();

    }, 500);
    //---------------

    checkIfDark();

}
setInterval(main, 1000); //runs once per second

//LIGHT ON/OFF----------------------------

var light = true;

//lights on/off
function lightsOn() {
    $("#image").addClass("lightsOn");
    $("#image").removeClass("lightsOff");
    
    $("#chain").addClass("chainLightsOn");
    $("#chain").removeClass("chainLightsOff");

    adjustForLight();

    light = true;
    return light;
}

function lightsOff() {
    $("#image").addClass("lightsOff");
    $("#image").removeClass("lightsOn");
    
    $("#chain").addClass("chainLightsOff");
    $("#chain").removeClass("chainLightsOn");

    adjustForDark();
    
    light = false;
    return light;
}

//pull-cord listener
$("#chain").click(function() { 
    $("#chain").animate({
        top: "+=20px"
    }, 500);
    setTimeout( function() {
        if (light == true) {
            lightsOff();
        }
        else if (light == false) {
            lightsOn();
        }

        $("#chain").animate({
            top: "-=20px"
        }, 500);
    }, 500);
});


//clock brightness
function adjustForLight() {
    if ($('div').hasClass("on2")) {
        $('.on2').addClass("on");
        $('.on').removeClass("on2");
    } if ($('div').hasClass("off2")) {
        $('.off2').addClass("off");
        $('.off').removeClass("off2");
    } 

    $('#glass').removeClass("dim");
}

function adjustForDark() {
    if ($('div').hasClass("on")) {
        $('.on').addClass("on2");
        $('.on2').removeClass("on");
    } if ($('div').hasClass("off")) {
        $('.off').addClass("off2");
        $('.off2').removeClass("off");
    } if ($('div').hasClass("on2")) {
        $('.on2').removeClass("off2");
    }

    $('#glass').addClass("dim");
}

//general check
function checkIfDark() {
    
    if (light == false) {
        adjustForDark();
    } else {
        adjustForLight();
    }
}

//NUMBERS-------------------------

//add zeroes to 0-9 numbers
function addZero(num) {
    if (num < 10) {

    num = "0" + num;

    }

    return num;
}

//assign 0-9
function assignToFunction(type, num) {

    if (num == 0) {
        zero(type);
    } else if (num == 1) {
        one(type);
    } else if (num == 2) {
        two(type);
    } else if (num == 3) {
        three(type);
    } else if (num == 4) {
        four(type); 
    } else if (num == 5) {
        five(type);
    } else if (num == 6) {
        six(type);
    } else if (num == 7) {
        seven(type);
    } else if (num == 8) {
        eight(type);
    } else if (num == 9) {
        nine(type);
    } else {
        alert("Invalid number");
    }
}

//manually set lights for number 0-9
function zero(type) {
    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-6").addClass("on");
    $("#" + type + "-6").removeClass("off");

    $("#" + type + "-10").addClass("on");
    $("#" + type + "-10").removeClass("off");

    $("#" + type + "-11").addClass("on");
    $("#" + type + "-11").removeClass("off");

    $("#" + type + "-14").addClass("on");
    $("#" + type + "-14").removeClass("off");

    $("#" + type + "-15").addClass("on");
    $("#" + type + "-15").removeClass("off");

    $("#" + type + "-16").addClass("on");
    $("#" + type + "-16").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-20").addClass("on");
    $("#" + type + "-20").removeClass("off");

    $("#" + type + "-21").addClass("on");
    $("#" + type + "-21").removeClass("off");

    $("#" + type + "-22").addClass("on");
    $("#" + type + "-22").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-26").addClass("on");
    $("#" + type + "-26").removeClass("off");

    $("#" + type + "-30").addClass("on");
    $("#" + type + "-30").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function one(type) {
    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-7").addClass("on");
    $("#" + type + "-7").removeClass("off");

    $("#" + type + "-8").addClass("on");
    $("#" + type + "-8").removeClass("off");

    $("#" + type + "-13").addClass("on");
    $("#" + type + "-13").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-23").addClass("on");
    $("#" + type + "-23").removeClass("off");

    $("#" + type + "-28").addClass("on");
    $("#" + type + "-28").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function two(type) {
    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-6").addClass("on");
    $("#" + type + "-6").removeClass("off");

    $("#" + type + "-10").addClass("on");
    $("#" + type + "-10").removeClass("off");

    $("#" + type + "-15").addClass("on");
    $("#" + type + "-15").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-19").addClass("on");
    $("#" + type + "-19").removeClass("off");

    $("#" + type + "-22").addClass("on");
    $("#" + type + "-22").removeClass("off");

    $("#" + type + "-26").addClass("on");
    $("#" + type + "-26").removeClass("off");

    $("#" + type + "-31").addClass("on");
    $("#" + type + "-31").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");

    $("#" + type + "-35").addClass("on");
    $("#" + type + "-35").removeClass("off");
}

function three(type) {
    $("#" + type + "-1").addClass("on");
    $("#" + type + "-1").removeClass("off");

    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-10").addClass("on");
    $("#" + type + "-10").removeClass("off");

    $("#" + type + "-15").addClass("on");
    $("#" + type + "-15").removeClass("off");

    $("#" + type + "-17").addClass("on");
    $("#" + type + "-17").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-19").addClass("on");
    $("#" + type + "-19").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-30").addClass("on");
    $("#" + type + "-30").removeClass("off");

    $("#" + type + "-31").addClass("on");
    $("#" + type + "-31").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function four(type) {
    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-8").addClass("on");
    $("#" + type + "-8").removeClass("off");

    $("#" + type + "-9").addClass("on");
    $("#" + type + "-9").removeClass("off");

    $("#" + type + "-12").addClass("on");
    $("#" + type + "-12").removeClass("off");

    $("#" + type + "-14").addClass("on");
    $("#" + type + "-14").removeClass("off");

    $("#" + type + "-16").addClass("on");
    $("#" + type + "-16").removeClass("off");

    $("#" + type + "-19").addClass("on");
    $("#" + type + "-19").removeClass("off");

    $("#" + type + "-21").addClass("on");
    $("#" + type + "-21").removeClass("off");

    $("#" + type + "-22").addClass("on");
    $("#" + type + "-22").removeClass("off");

    $("#" + type + "-23").addClass("on");
    $("#" + type + "-23").removeClass("off");

    $("#" + type + "-24").addClass("on");
    $("#" + type + "-24").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-29").addClass("on");
    $("#" + type + "-29").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function five(type) {
    $("#" + type + "-1").addClass("on");
    $("#" + type + "-1").removeClass("off");

    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-5").addClass("on");
    $("#" + type + "-5").removeClass("off");

    $("#" + type + "-6").addClass("on");
    $("#" + type + "-6").removeClass("off");

    $("#" + type + "-11").addClass("on");
    $("#" + type + "-11").removeClass("off");

    $("#" + type + "-12").addClass("on");
    $("#" + type + "-12").removeClass("off");

    $("#" + type + "-13").addClass("on");
    $("#" + type + "-13").removeClass("off");

    $("#" + type + "-14").addClass("on");
    $("#" + type + "-14").removeClass("off");

    $("#" + type + "-20").addClass("on");
    $("#" + type + "-20").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-26").addClass("on");
    $("#" + type + "-26").removeClass("off");

    $("#" + type + "-30").addClass("on");
    $("#" + type + "-30").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function six(type) {
    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-6").addClass("on");
    $("#" + type + "-6").removeClass("off");

    $("#" + type + "-11").addClass("on");
    $("#" + type + "-11").removeClass("off");

    $("#" + type + "-16").addClass("on");
    $("#" + type + "-16").removeClass("off");

    $("#" + type + "-17").addClass("on");
    $("#" + type + "-17").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-19").addClass("on");
    $("#" + type + "-19").removeClass("off");

    $("#" + type + "-21").addClass("on");
    $("#" + type + "-21").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-26").addClass("on");
    $("#" + type + "-26").removeClass("off");

    $("#" + type + "-30").addClass("on");
    $("#" + type + "-30").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function seven(type) {
    $("#" + type + "-1").addClass("on");
    $("#" + type + "-1").removeClass("off");

    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-5").addClass("on");
    $("#" + type + "-5").removeClass("off");

    $("#" + type + "-10").addClass("on");
    $("#" + type + "-10").removeClass("off");

    $("#" + type + "-14").addClass("on");
    $("#" + type + "-14").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-22").addClass("on");
    $("#" + type + "-22").removeClass("off");

    $("#" + type + "-27").addClass("on");
    $("#" + type + "-27").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");
}

function eight(type) {
    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-6").addClass("on");
    $("#" + type + "-6").removeClass("off");

    $("#" + type + "-10").addClass("on");
    $("#" + type + "-10").removeClass("off");

    $("#" + type + "-11").addClass("on");
    $("#" + type + "-11").removeClass("off");

    $("#" + type + "-15").addClass("on");
    $("#" + type + "-15").removeClass("off");

    $("#" + type + "-17").addClass("on");
    $("#" + type + "-17").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-19").addClass("on");
    $("#" + type + "-19").removeClass("off");

    $("#" + type + "-21").addClass("on");
    $("#" + type + "-21").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-26").addClass("on");
    $("#" + type + "-26").removeClass("off");

    $("#" + type + "-30").addClass("on");
    $("#" + type + "-30").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

function nine(type) {
    $("#" + type + "-2").addClass("on");
    $("#" + type + "-2").removeClass("off");

    $("#" + type + "-3").addClass("on");
    $("#" + type + "-3").removeClass("off");

    $("#" + type + "-4").addClass("on");
    $("#" + type + "-4").removeClass("off");

    $("#" + type + "-6").addClass("on");
    $("#" + type + "-6").removeClass("off");

    $("#" + type + "-10").addClass("on");
    $("#" + type + "-10").removeClass("off");

    $("#" + type + "-11").addClass("on");
    $("#" + type + "-11").removeClass("off");

    $("#" + type + "-15").addClass("on");
    $("#" + type + "-15").removeClass("off");

    $("#" + type + "-17").addClass("on");
    $("#" + type + "-17").removeClass("off");

    $("#" + type + "-18").addClass("on");
    $("#" + type + "-18").removeClass("off");

    $("#" + type + "-19").addClass("on");
    $("#" + type + "-19").removeClass("off");

    $("#" + type + "-20").addClass("on");
    $("#" + type + "-20").removeClass("off");

    $("#" + type + "-25").addClass("on");
    $("#" + type + "-25").removeClass("off");

    $("#" + type + "-30").addClass("on");
    $("#" + type + "-30").removeClass("off");

    $("#" + type + "-32").addClass("on");
    $("#" + type + "-32").removeClass("off");

    $("#" + type + "-33").addClass("on");
    $("#" + type + "-33").removeClass("off");

    $("#" + type + "-34").addClass("on");
    $("#" + type + "-34").removeClass("off");
}

