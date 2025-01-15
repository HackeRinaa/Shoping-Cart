import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import cartStore from "../../stores/CartStore";
import {CartItem} from "../../stores/CartStore/CartStore"
import { observer } from "mobx-react-lite";


const StoreItem: React.FC<StoreItemProps> = observer(({item}) => {

  let quantity = cartStore.cart[item.id]?.quantity || 0;


  const handleAddToCart = () => {
    if (!cartStore.cart[item.id]) {
      cartStore.addToCart({...item, quantity: 1});
      quantity = 1;
    } else {
      cartStore.updateQuantity(item.id, cartStore.cart[item.id].quantity + 1);
      quantity = cartStore.cart[item.id].quantity + 1;
    }
  };

  

  return (
    <Card className="h-100 rounded shadow p-3 mb-3 bg-body card-hover">
        <Card.Img variant="top" src={item.imgUrl} height="300rem" style={{objectFit: "cover"}}/>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4 text-dark">{item.name}</span>
            <span className="ms-2 text-secondary">{formatCurrency(item.price)}</span>
          </Card.Title>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            {(quantity === 0 ? (
              <Button 
                className="mb-2 py-2 px-4 rounded-pill"
                onClick={() => handleAddToCart()}
              >
                 + Add to Cart
              </Button>
            ) : (
              <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                  <Button 
                    className="rounded d-flex align-items-center justify-content-center" style={{width: "2rem", height: "2rem"}}
                    onClick={() => cartStore.updateQuantity(item.id, quantity-1)}
                  >
                    -
                  </Button>
                  <div className=""> 
                    <span className="fs-4 text-dark">{quantity}
                      <span className="text-secondary fs-5"> in cart</span>
                    </span>
                  </div>
                  <Button 
                    className="rounded d-flex align-items-center justify-content-center" 
                    style={{width: "2rem", height: "2rem"}}
                    onClick={() => cartStore.updateQuantity(item.id, quantity+1)}
                  >
                    +
                  </Button>
                </div>
                <Button  
                  className="mt-3 py-2 px-4 d-flex align-items-center justify-content-center" 
                  variant="danger" 
                  size="sm"
                  onClick={() => cartStore.removeFromCart(item.id)}
                >
                    Remove
                </Button>
              </div>
            ))}
          </div>
        </Card.Body>
    </Card>
  );
}
);
export default StoreItem;

type StoreItemProps = {
    item : CartItem;
}