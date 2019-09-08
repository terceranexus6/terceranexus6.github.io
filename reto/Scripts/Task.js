function createSearchUrl(term) {

}

function registerStatistics(t, k) {

}

var ar = [];

function updateSolution(val) {
    ar.push(val);
    var txt = "<ul>\n";
    $(ar).each(function (i,elm) {
        var html = elm;
        txt += "<li>" + html + "</li>\n";
    });
    txt += "</ul>";
    $(".wrong pre").text(txt);

    var txt = "<ul>\n";
    $(ar).each(function (i, elm) {
        var html = elm;
        txt += "<li>" + $("<div>").text(html).html() + "</li>\n";
    });
    txt += "</ul>";
    $(".right div").html(txt);
    $(".right pre").text(txt);




}
