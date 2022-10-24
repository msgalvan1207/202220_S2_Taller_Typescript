import { Series } from './dataSeries.js';
var seriesTbody = document.getElementById('tableContent');
var card = document.getElementById('card');
renderSeriesInTable(Series);
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
btn1.onclick = function () {
    renderSerieDetail(Series[0]);
};
btn2.onclick = function () {
    renderSerieDetail(Series[1]);
};
btn3.onclick = function () {
    renderSerieDetail(Series[2]);
};
btn4.onclick = function () {
    renderSerieDetail(Series[3]);
};
btn5.onclick = function () {
    renderSerieDetail(Series[4]);
};
btn6.onclick = function () {
    renderSerieDetail(Series[5]);
};
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(c.id, "</th>\n                               <td><a href=\"#\" id=\"btn").concat(c.id, "\">").concat(c.name, "</a></td>\n                               <td>").concat(c.producer, "</td>\n                               <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var trElement1 = document.createElement("tr");
    trElement1.innerHTML = "<td> Seasons Average: ".concat(calculateSeriesSeasonsAverage(series), "</td>");
    seriesTbody.appendChild(trElement1);
}
function calculateSeriesSeasonsAverage(series) {
    var n = 0;
    var totalSeasons = 0;
    series.forEach(function (c) {
        n = n + 1;
        totalSeasons = totalSeasons + c.seasons;
    });
    return totalSeasons / n;
}
function renderSerieDetail(serie) {
    card.innerHTML = "";
    card.className = "card";
    var imgElement = document.createElement("img");
    imgElement.src = "".concat(serie.img);
    console.log(serie.name);
    card.appendChild(imgElement);
    var divElement = document.createElement("div");
    divElement.className = "card-body";
    divElement.innerHTML = "<h5 class=\"card-title\">".concat(serie.name, "</h5>\n                            <p class=\"card-text\">").concat(serie.descr, "</p>\n                            <a href=\"#\">").concat(serie.url, "</a>;");
    card.appendChild(divElement);
}
