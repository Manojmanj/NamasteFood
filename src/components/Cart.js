import { useDispatch, useSelector } from "react-redux";
import AccordianItemList from "./AccordianItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold m-2">Cart</h1>
      <div className="w-6/12 m-auto">
        <AccordianItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1>Cart is empty! Add items to the cart </h1>
        )}
        <button
          className="p-1 m-4 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
