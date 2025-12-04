import CartSidebar from "@/components/CartSidebar";
import { useState } from "react";
import ProductListing from "@/pages/ProductListing";
import AppointmentCompletion from "@/pages/AppointmentCompletion";
import "./styles.css";
import Navbar from "@/components/Navbar/Navbar";

export default function App() {
  const [showAppointment, setShowAppointment] = useState(false);

  return (
    <div className="App">
      <Navbar />

      <div className="page-container">
        <div className="content">
          <h2>Dashboard Content Here</h2>
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: 20 }}>
          <button onClick={() => setShowAppointment((p) => !p)}>
            Toggle Appointment UI
          </button>

          {showAppointment ? <AppointmentCompletion /> : <ProductListing />}
        </div>

        <CartSidebar />
      </div>
 */
