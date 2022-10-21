import { Serie } from './serie.js';

import { Series } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('tableContent')!;



renderSeriesInTable(Series);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${c.id}</th>
                               <td>${c.name}</td>
                               <td>${c.producer}</td>
                               <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    })
    let trElement1 = document.createElement("tr");
    trElement1.innerHTML = `<td> Seasons Average: ${calculateSeriesSeasonsAverage(series)}</td>`;
    seriesTbody.appendChild(trElement1);
}



function calculateSeriesSeasonsAverage(series: Serie[]): number {
    let n: number = 0;
    let totalSeasons: number = 0;
    series.forEach(c => {
        n = n + 1;
        totalSeasons = totalSeasons + c.seasons;
    });
    return totalSeasons/n;
}