import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredProducts,
  setSearch,
  setCategory,
  setPage,
} from "@/redux/slices/productsSlice";
import { addToCart } from "@/redux/slices/cartSlice";

export default function ProductListing() {
  const dispatch = useDispatch();
  const { products, total } = useSelector(selectFilteredProducts);

  return (
    <div>
      <h2>Products</h2>

      <input
        placeholder="Search"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select onChange={(e) => dispatch(setCategory(e.target.value || null))}>
        <option value="">All</option>
        <option value="Skin">Skin</option>
        <option value="Hair">Hair</option>
      </select>

      <div>
        {products.map((p) => (
          <div
            key={p.id}
            style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}
          >
            <div>{p.title}</div>
            <div>₹{p.price}</div>
            <button onClick={() => dispatch(addToCart(p))}>Add</button>
          </div>
        ))}
      </div>

      <button onClick={() => dispatch(setPage(1))}>1</button>
      <button onClick={() => dispatch(setPage(2))}>2</button>
      <div>Total: {total}</div>
    </div>
  );
}
