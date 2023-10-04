$(document).ready(function(){

    $('#bio').hide();
    $('#resume').hide();
    $('#back').hide();

    $('#bioBtn').click(function() {
        $('#bio').show();
        $('#back').show();
        $('.links').hide();
        $('#bioBtn').hide();
        $('#resumeBtn').hide();
    });

    $('#resumeBtn').click(function() {
        $('#resume').show();
        $('#back').show();
        $('.links').hide();
        $('#bioBtn').hide();
        $('#resumeBtn').hide();
    });

    $('#back').click(function() {
        $('#back').hide();
        $('#bio').hide();
        $('#resume').hide();
        $('.links').show();
        $('#bioBtn').show();
        $('#resumeBtn').show();
    })
});