import { Series } from './dataSeries.js';
var seriesTbody = document.getElementById('tableContent');
renderSeriesInTable(Series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(c.id, "</th>\n                               <td>").concat(c.name, "</td>\n                               <td>").concat(c.producer, "</td>\n                               <td>").concat(c.seasons, "</td>");
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
