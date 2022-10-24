import { Serie } from './serie.js';

import { Series } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('tableContent')!;
const card: HTMLElement = document.getElementById('card')!;




renderSeriesInTable(Series);
const btn1: HTMLElement = document.getElementById('btn1')!;
const btn2: HTMLElement = document.getElementById('btn2')!;
const btn3: HTMLElement = document.getElementById('btn3')!;
const btn4: HTMLElement = document.getElementById('btn4')!;
const btn5: HTMLElement = document.getElementById('btn5')!;
const btn6: HTMLElement = document.getElementById('btn6')!;

btn1.onclick = () => {
    renderSerieDetail(Series[0]);
};

btn2.onclick = () => {
    renderSerieDetail(Series[1]);
};

btn3.onclick = () => {
    renderSerieDetail(Series[2]);
};

btn4.onclick = () => {
    renderSerieDetail(Series[3]);
};

btn5.onclick = () => {
    renderSerieDetail(Series[4]);
};

btn6.onclick = () => {
    renderSerieDetail(Series[5]);
};



function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${c.id}</th>
                               <td><a href="#" id="btn${c.id}">${c.name}</a></td>
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


function renderSerieDetail(serie: Serie) : void {
    card.innerHTML="";
    card.className = "card";
    let imgElement = document.createElement("img");
    imgElement.src = `${serie.img}`;
    console.log(serie.name);
    card.appendChild(imgElement);

    let divElement = document.createElement("div");
    divElement.className = `card-body`;
    divElement.innerHTML = `<h5 class="card-title">${serie.name}</h5>
                            <p class="card-text">${serie.descr}</p>
                            <a href="#">${serie.url}</a>;`
    card.appendChild(divElement);
}