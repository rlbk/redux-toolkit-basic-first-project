import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  const cards = cartProducts.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: "10px" }}>
      <Card className="h-100 pt-2">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Rs {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="danger" onClick={() => removeFromCart(product)}>
            Remove item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center mb-4">Cart</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
