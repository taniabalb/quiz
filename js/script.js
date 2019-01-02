/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        var score1 = question1(q1Result);
        var score2 = question2(q2Result);
        var score3 = question3(q3Result);
    });
        
});
function question1(x){
    if (x == "beer"){
        return 1;
    } else if (x == "egg and waffles"){
        return 2;
    } else if (x == "what is a meal?"){
        return 3;
    } else {
        return 0;
    }
}
function question2(x){
    if (x == "shrug and hop in"){
        return 1;
    } else if (x == "wait for the next one"){
        return 2;
    } else if (x == "punch it in the nose"){
        return 3;
    } else {
        return 0;
    }
}
function question3(x){
    if (x == "dog"){
        return 1;
    } else if (x == "cat"){
        return 2;
    } else if (x == "humans"){
        return 3;
    } else {
        return 0;
    }
}