// el export es como el inverso del import en Java. Se declara que el elemento va a hacer usado en otros archivos
var Serie = /** @class */ (function () {
    function Serie(id, name, producer, seasons, descr, url, img) {
        this.id = id;
        this.name = name;
        this.producer = producer;
        this.seasons = seasons;
        this.descr = descr;
        this.url = url;
        this.img = img;
    }
    return Serie;
}());
export { Serie };
