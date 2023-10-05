$(document).ready(function(){

    $('#bio').hide();
    $('#resume').hide();
    $('#back').hide();
    $('.card').hide();
    $('.answer').hide();

    $('#bioBtn').click(function() {
        $('#bio').show();
        $('#back').show();
        $('#bioBtn').hide();
        $('#resumeBtn').hide();
        $('.box').hide();
        $('.card').show();
        $('.answer').show();
    });

    $('#resumeBtn').click(function() {
        $('#resume').show();
        $('#back').show();
        $('#bioBtn').hide();
        $('#resumeBtn').hide();
        $('.box').hide();
        $('.card').show();
        $('.answer').hide();
    });

    $('#back').click(function() {
        $('#back').hide();
        $('#bio').hide();
        $('#resume').hide();
        $('#bioBtn').show();
        $('#resumeBtn').show();
        $('.box').show();
        $('.card').hide();
        $('.answer').hide();
        $('#cow').hide();
    });
});

function displayCow() {
    let answer = document.getElementById("animal").value;
    let cowPic = document.getElementById("cow");
    if (answer == "Yes") {
        cowPic.style.visibility = "visible";
        $('#cow').show();
    }
}
