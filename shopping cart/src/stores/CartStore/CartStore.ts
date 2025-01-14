import { makeAutoObservable } from "mobx";

export interface CartItem {
    id:number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
}

export class CartStore {
    readonly cart: Record<string,CartItem> = {};
    


    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item: CartItem) {
        if (this.cart[item.id]) {
            this.cart[item.id].quantity += item.quantity;
        } else {
            this.cart[item.id] = {...item};
        }
    }

    removeFromCart(itemId: number) {
        delete this.cart[itemId];
    }

    updateQuantity(itemId: number, quantity: number) {
        if (this.cart[itemId]) {
            if (quantity <= 0) {
                delete this.cart[itemId];
            } else {
                this.cart[itemId].quantity = quantity;
            }
        }
    }

    get totalItems() {
        return Object.keys(this.cart).length;
    }

    get totalPrice() {
        return Object.values(this.cart).reduce((total, item) => total + item.price * item.quantity, 0);
    }

}