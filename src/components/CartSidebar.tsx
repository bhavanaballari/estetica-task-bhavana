import { useSelector, useDispatch } from "react-redux";
import { updateQty } from "@/redux/slices/cartSlice";

export default function CartSidebar() {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div
      style={{
        width: 250,
        borderLeft: "1px solid #ccc",
        padding: 20,
      }}
    >
      <h3>Cart</h3>
      {items.map((i) => (
        <div key={i.productId}>
          <div>{i.title}</div>
          <input
            type="number"
            value={i.quantity}
            onChange={(e) =>
              dispatch(
                updateQty({ productId: i.productId, quantity: +e.target.value })
              )
            }
          />
          <div>₹{i.price * i.quantity}</div>
        </div>
      ))}
      <hr />
      <div>Subtotal: ₹{subtotal}</div>
    </div>
  );
}
