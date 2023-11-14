import { Food } from "./Food";

export class CartItem{
quantitySelect: any;
    constructor(public food:Food){
    }
quantity:number = 1;
price :number = this.food.price;
}