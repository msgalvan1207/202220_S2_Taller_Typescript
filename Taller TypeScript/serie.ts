export class Serie {
    id: number;
    name: string;
    producer: string;
    seasons: number;
    descr: string;
    url: string
    img: string;

    constructor(id: number, name: string, producer: string, seasons: number, descr: string, url: string, img: string) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        this.seasons = seasons;
        this.descr=descr;
        this.url=url;
        this.img=img;
    }
}