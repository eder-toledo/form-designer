$(document).ready(function () {
    var menuelements = null;
    var i = 0;
    for (i; i < menuelements.length; i++) {
        var element = '<center class="menu-element">' + menuelements[i].icon + '' + menuelements[i].name + '</center>';
        $(".menu").append(element);
    }
});