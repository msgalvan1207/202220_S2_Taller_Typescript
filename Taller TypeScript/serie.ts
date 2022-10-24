// el export es como el inverso del import en Java. Se declara que el elemento va a hacer usado en otros archivos
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