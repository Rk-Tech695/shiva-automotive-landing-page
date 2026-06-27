import { Link } from "react-router-dom";
import COLORS from "../styles/colors";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d0d1a",
        color: "#fff",
        padding: "70px 25px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Oswald",
              marginBottom: "15px",
            }}
          >
            SHIVA{" "}
            <span style={{ color: COLORS.orange }}>
              AUTO
            </span>
            MOTIVE
          </h2>

          <p style={{ lineHeight: "30px" }}>
            Trusted Automotive Workshop in
            Bagbahara,Chhattisgarh.
          </p>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "15px",
              color: COLORS.orange,
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link to="/">Home</Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "15px",
              color: COLORS.orange,
            }}
          >
            Legal
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms &
              Conditions
            </Link>
          </div>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "15px",
              color: COLORS.orange,
            }}
          >
            Contact
          </h3>

          <p>📍 Plot Khasra No. 92, Village Khopli NH-353, Bhawanipatna - Raipur Hwy, Bagbahara, Chhattisgarh 493449</p>

          <p>📞 +91-8518071111</p>

          <p>
            ✉️
            info@shivaautomotive.in
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0 20px",
          borderColor: "#333",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#aaa",
        }}
      >
        © 2025 Shiva Automotive.
        All Rights Reserved.
      </p>
    </footer>
  );
}