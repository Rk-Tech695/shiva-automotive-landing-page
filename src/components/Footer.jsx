import { Link } from "react-router-dom";
import COLORS from "../styles/colors";
import logo from "../assets/Shiva Automotive.png";
import ashokLogo from "../assets/Ashok_Leyland-Logo.svg";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F172A",
        color: "#fff",
        padding: "28px 20px 10px",
        borderTop: `3px solid ${COLORS.orange}`,
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {/* Logo */}

        <div>
          <img
            src={logo}
            alt="Shiva Automotive"
            style={{
              width: "150px",
              marginBottom: "12px",
            }}
          />

          <div style={{ marginBottom: "20px" }}>
  <img
    src={ashokLogo}
    alt="Ashok Leyland Authorized Service Center"
    style={{
      width: "145px",
      height: "auto",
      marginBottom: "8px",
      background: "#fff",
      padding: "8px",
      borderRadius: "8px",
    }}
  />

  <p
    style={{
      color: "#cbd5e1",
      lineHeight: "26px",
      margin: 0,
    }}
  >
    <strong style={{ color: "#fff" }}>
      Ashok Leyland Authorized Service &
      Spare Parts Center
    </strong>

    <br />

    Trusted Automotive Workshop in
    Bagbahara, Chhattisgarh.
  </p>
</div>

          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              fontSize: "14px",
              borderRadius: "8px",
              background: "#1E293B",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <strong style={{ color: COLORS.orange }}>
              GSTIN
            </strong>

            <br />

            22ADYFS2927D1ZW
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3
            style={{
              marginBottom: "20px",
              color: COLORS.orange,
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/about">About</Link>
            <Link className="footer-link" to="/services">Services</Link>
            <Link className="footer-link" to="/contact">Contact</Link>
          </div>
        </div>

        {/* Services */}

        <div>
          <h3
            style={{
              marginBottom: "20px",
              color: COLORS.orange,
            }}
          >
            Our Services
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "#cbd5e1",
            }}
          >
            <span>Engine Repair</span>
            <span>AC Service</span>
            <span>Oil Change</span>
            <span>Wheel Alignment</span>
            <span>Brake Service</span>
            <span>Genuine Spare Parts</span>
          </div>
        </div>

        {/* Contact */}

        <div>
          <h3
            style={{
              marginBottom: "20px",
              color: COLORS.orange,
            }}
          >
            Contact Us
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "#1E293B",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              📞 <strong>Workshop Manager</strong>

              <br />

              +91 8518031111
            </div>

            <div
              style={{
                background: "#1E293B",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              📞 <strong>Floor Supervisor</strong>

              <br />

              +91 8518091111
            </div>

            <div
              style={{
                background: "#1E293B",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              ✉ automotive.shiva@gmail.com
              <br />
              ✉ service@shivaautomotive.in
            </div>

            <div
              style={{
                background: "#1E293B",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,.08)",
                lineHeight: "22px",
                fontSize:"14px",
              }}
            >
              📍 Plot Khasra No. 92,
              <br />
              Village Khopli NH-353,
              <br />
              Bhawanipatna - Raipur Hwy,
              <br />
              Bagbahara,
              <br />
              Chhattisgarh - 493449
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0 15px",
          borderColor: "rgba(255,255,255,.08)",
        }}
      />

      <div
style={{
maxWidth:"1250px",
margin:"auto",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
flexWrap:"wrap",
gap:"10px",
fontSize:"14px",
color:"#94A3B8",
}}
>
        <p>
          © 2026 <strong>Shiva Automotive</strong>. All Rights
          Reserved.
        </p>

        <p>
          Designed & Developed with ❤️ by Shiva Automotive
        </p>
      </div>
    </footer>
  );
}