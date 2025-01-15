import { observer } from "mobx-react-lite";
import cartStore from "../stores/CartStore";
import { Offcanvas, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";


const Cart: React.FC =  observer(() => {
    const items = Object.values(cartStore.cart);

    return (
        <Offcanvas show={cartStore.showCartOverlay} onHide={() => cartStore.toggleCartOverlay()} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
                {items.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    <ul className="list-unstyled">
                        {items.map((item) => (
                            <li key={item.id} className="mb-3 shadow py-3 px-2">
                                <div className="d-flex justify-content-betwwen align-items-center" style={{gap: "2rem"}}>
                                    <img src={item.imgUrl} alt="product picture" style={{height: "100px", width: "100px", objectFit: "cover"}} />
                                    <div className="d-flex flex-column align-items-start justify-content-between h-100 w-100">
                                        <span className="fs-5">{item.name}</span>
                                        <div className="d-flex justify-content-between w-100">
                                            <span className="fs-6">{formatCurrency(item.price)}</span>
                                            <span className="fs-6  fw-bold text-dark">Quantity: 
                                                <span className="fs-6 text-danger"> {item.quantity}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="mt-auto d-flex flex-column">
                    <div className="d-flex w-100 justify-content-between">
                        <span className="fs-4">Total: </span>
                        <span className="fs-3 text-danger">{formatCurrency(cartStore.totalPrice)}</span>
                    </div>
                    <Button className="mx-5 my-3 px-2 py-2 fs-4">Checkout</Button>
                </div>
               
            </Offcanvas.Body>
        </Offcanvas>
    );
});

export default Cart;

