import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import { observer } from "mobx-react-lite";

const Store: React.FC = observer(() => {
  return (
    <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem item={{...item, quantity: 0}}  />
                </Col>
            ))}
        </Row>
    </>
  );
})

export default Store;