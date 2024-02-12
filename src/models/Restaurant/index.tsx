import Product from '../Product';

class Restaurant {
    id: number;
    title: string;
    image: string;
    score: number;
    infos: string[];
    description: string;
    products: Product[];

    constructor(
        id: number,
        title: string,
        image: string,
        score: number,
        infos: string[],
        description: string,
        products: Product[]
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.score = score;
        this.infos = infos;
        this.description = description;
        this.products = products;
    }
}

export default Restaurant;
