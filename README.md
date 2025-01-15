# Shopping Cart Application

A simple shopping cart application built using **React**, **TypeScript**, **MobX**, and **Bootstrap**. This app demonstrates the usage of MobX for state management and provides a dynamic user interface for managing a shopping cart.

## Features

- View a list of store items with name, price, and image.
- Add items to the cart with a single click.
- Update item quantities directly from the cart.
- Remove items from the cart.
- View a total price and proceed to checkout from a shopping cart overlay.
- Clean and responsive UI using Bootstrap.

## Technology Stack

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **MobX**: State management library.
- **Bootstrap**: For responsive and styled components.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd shopping-cart
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── StoreItem.tsx
│   │   └── CartOverlay.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Store.tsx
│   ├── stores
│   │   └── CartStore.ts
│   ├── utilities
│   │   └── formatCurrency.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## Usage

### Adding Items to the Cart
1. Navigate to the **Store** page.
2. Click on the `+ Add to Cart` button for an item.
3. The item will be added to the cart, and its quantity will increase.

### Viewing the Cart
1. Click on the shopping cart icon in the navigation bar.
2. An overlay will appear showing the items in the cart, their quantities, and the total price.

### Updating Quantities
- Use the `+` and `-` buttons in the cart overlay to adjust the quantities of items.
- If an item's quantity is reduced to zero, it will be removed from the cart automatically.

### Removing Items
- Click the `Remove` button in the cart overlay to delete an item from the cart.

### Checkout
- View the total price and click on the **Checkout** button to proceed (this feature is a placeholder in the current implementation).

## Scripts

- **`npm start`**: Starts the development server.
- **`npm build`**: Builds the project for production.
- **`npm test`**: Runs tests (if any).

## State Management

The app uses **MobX** to manage the cart's state. The `CartStore` class handles the following operations:

- Adding items to the cart.
- Removing items from the cart.
- Updating item quantities.
- Calculating total items and total price.

### Key Store Functions

- `addToCart(item: CartItem)`
- `removeFromCart(itemId: number)`
- `updateQuantity(itemId: number, quantity: number)`
- `get totalItems`: Calculates the total number of unique items in the cart.
- `get totalPrice`: Calculates the total price of items in the cart.

## Future Enhancements

- Add user authentication and persistence.
- Integrate with a backend for real-time updates.
- Implement a payment gateway for checkout.

## Demo 
![alt text](<Screenshot 2025-01-15 132521.png>)
![alt text](<Screenshot 2025-01-15 132541.png>)