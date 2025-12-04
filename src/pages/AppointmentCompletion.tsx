import { useSelector, useDispatch } from "react-redux";
import { updateQty } from "@/redux/slices/cartSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Required"),
  phone: yup.string().required("Required"),
});

export default function AppointmentCompletion() {
  const items = useSelector((s: any) => s.cart.items);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const subtotal = items.reduce(
    (s: any, i: any) => s + i.price * i.quantity,
    0
  );
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div>
      <h2>Appointment Completion</h2>

      <div>
        {items.map((i: any) => (
          <div key={i.productId}>
            {i.title}
            <input
              type="number"
              value={i.quantity}
              onChange={(e) =>
                dispatch(
                  updateQty({
                    productId: i.productId,
                    quantity: +e.target.value,
                  })
                )
              }
            />
          </div>
        ))}
      </div>

      <h3>Billing</h3>
      <div>Subtotal: ₹{subtotal}</div>
      <div>Tax (18%): ₹{tax.toFixed(2)}</div>
      <div>Total: ₹{total.toFixed(2)}</div>

      <form
        onSubmit={handleSubmit((data) => {
          alert("Appointment saved:\n" + JSON.stringify(data, null, 2));
        })}
      >
        <input placeholder="Name" {...register("name")} />
        <p style={{ color: "red" }}>{formState.errors.name?.message}</p>

        <input placeholder="Phone" {...register("phone")} />
        <p style={{ color: "red" }}>{formState.errors.phone?.message}</p>

        <button type="submit">Complete</button>
      </form>
    </div>
  );
}
