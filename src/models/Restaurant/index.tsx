class Restaurant {
    id: number;
    title: string;
    image: string;
    score: number;
    infos: string[];
    description: string;

    constructor(id: number, title: string, image: string, score: number, infos: string[], description: string) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.score = score;
        this.infos = infos;
        this.description = description;
    }
}

export default Restaurant;
