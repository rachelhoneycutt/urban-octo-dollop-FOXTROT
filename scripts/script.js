$(document).ready(function(){

    $('#bio').hide();
    $('#resume').hide();
    $('#back').hide();

    $('#bioBtn').click(function() {
        $('#bio').show();
        $('#back').show();
        $('#bioBtn').hide();
        $('#resumeBtn').hide();
        $('.box').hide();
    });

    $('#resumeBtn').click(function() {
        $('#resume').show();
        $('#back').show();
        $('#bioBtn').hide();
        $('#resumeBtn').hide();
        $('.box').hide();
    });

    $('#back').click(function() {
        $('#back').hide();
        $('#bio').hide();
        $('#resume').hide();
        $('#bioBtn').show();
        $('#resumeBtn').show();
        $('.box').show();
    })
});
