import { makeAutoObservable, observable } from "mobx";

export interface CartItem {
    id:number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
}

export class CartStore {
    readonly cart: Record<string,CartItem> = {};
    showCartOverlay = false;


    constructor() {
        makeAutoObservable(this, {
            cart: observable,
        });
       
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

    toggleCartOverlay() {
        this.showCartOverlay = !this.showCartOverlay;
    }

    get totalItems() {
        const totalQuantity = Object.values(this.cart).reduce((total, item) => total + item.quantity, 0);
        return totalQuantity;
    }

    get totalPrice() {
        return Object.values(this.cart).reduce((total, item) => total + item.price * item.quantity, 0);
    }

}