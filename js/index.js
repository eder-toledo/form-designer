$(document).ready(function () {
    $.getJSON('js/menu-element.json', function(data) {
        var menuelements = data;
        var i = 0;
        for (i; i < menuelements.length; i++) {
            var element = '<center class="menu-element">' + menuelements[i].icon + '' + menuelements[i].name + '</center>';
            $(".menu").append(element);
        }
    });
});