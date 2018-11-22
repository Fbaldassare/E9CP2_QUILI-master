
$(document).ready(function () {
    $('#myform').on('submit', function (event) {
        var text = ($('#mytext').val());
        event.preventDefault();
        $('#board').append(
            '<div class= "note">'
            + ' <div class="col-md-1">'
            + ' <div class="avatar">'
            + '</div>'
            + '</div>'
            + name
            + text
            + '</div>'
            + '</div>')
        $('#mytext').val('')
        $('#mytext').focus()
    });

    $('#board').on('click', '.note', function () {
        $(this).toggleClass('strike');
    })
})
