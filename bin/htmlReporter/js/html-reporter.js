
$(function () {
    $('div.stacktrace').on('click', 'a', function (evt) {
        evt.preventDefault();
        var $link = $(this);
        var $code = $link.parent().find('code');
        $code.toggle();
        $code.is(':visible') ? $link.text('hide stacktrace') :
            $link.text('view stacktrace');
    });
    $('h3.suite')
        .on({
            click: function (evt) {
                $(this).next('ul.assertions').toggle();
                toggleAssertions(this);
            },
            mouseenter: function (evt) {
                toggleAssertions(this);
                $(this).find('span.toggle-assertions').show();
            },
            mouseleave: function (evt) {
                $(this).find('span.toggle-assertions').hide();
            }
        });
    function toggleAssertions(element) {
        if ($(element).next('ul.assertions').is(':visible')) {
            $(element).find('span.toggle-assertions').text('-');
        } else {
            $(element).find('span.toggle-assertions').text('+');
        }
    }
    $('#expand-collapse-all').on('click', function (evt) {
        $('ul.assertions').toggle();
    });
    if ($(document).height() > $(window).height()) {
        $('ul.assertions').hide();
    }
});
