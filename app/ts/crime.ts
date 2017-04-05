/**
 * Created by acer on 10/2/2016.
 */
export class Crime{

    id : number ;
    time :number;
    category : string ;
    pdDisrict : string;

    constructor(id: number, time: number, category: string, pdDisrict: string) {
        this.id = id;
        this.time = time;
        this.category = category;
        this.pdDisrict = pdDisrict;
    }
}