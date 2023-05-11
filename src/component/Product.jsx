import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  //   const [products, setProducts] = useState([]);

  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    //api without using redux
    // fetch(`${import.meta.env.VITE_PRODUCTS_API}`)
    //   .then((data) => data.json())
    //   .then((result) => {
    //     setProducts(result);
    //   });

    //dispatch an action for fetchProducts
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    //dispatch a action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center mb-4">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
