import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import COLORS from "../styles/colors";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled ? "rgba(26,26,46,.96)" : COLORS.dark,
          backdropFilter: "blur(10px)",
          transition: ".3s",
          borderBottom: scrolled
            ? `2px solid ${COLORS.orange}`
            : "2px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 25px",
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "28px",
              color: "#fff",
              fontWeight: "700",
              fontFamily: "Oswald",
            }}
          >
            SHIVA{" "}
            <span style={{ color: COLORS.orange }}>
              AUTO
            </span>
            MOTIVE
          </Link>

          <div
            className="desktop-menu"
            style={{
              display: "flex",
              gap: "35px",
              alignItems: "center",
            }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color:
                    location.pathname == item.path
                      ? COLORS.orange
                      : "#fff",
                  fontFamily: "Oswald",
                  letterSpacing: "1px",
                }}
              >
                {item.title}
              </Link>
            ))}

            <Link
              to="/contact"
              style={{
                background: COLORS.orange,
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Book Now
            </Link>
          </div>

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="mobile-btn"
  style={{
    display: "block",
    color: "#fff",
    fontSize: "34px",
    background: "transparent",
    border: "none",
  }}
>
  {menuOpen ? "✕" : "☰"}
</button>
        </div>
      </nav>

      {/* Overlay */}
{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.5)",
      zIndex: 9998,
    }}
  />
)}

{/* Right Drawer */}
<div
  style={{
    position: "fixed",
    top: 0,
    right: menuOpen ? 0 : "-300px",
    width: "280px",
    height: "100vh",
    background: COLORS.dark,
    transition: "right .35s ease",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    padding: "90px 25px 30px",
    boxShadow: "-8px 0 25px rgba(0,0,0,.4)",
  }}
>
  {/* Close Button */}
  <button
  onClick={() => setMenuOpen(false)}
  style={{
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: COLORS.orange,
    color: "#fff",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10000,
  }}
>
  ✕
</button>

  {navLinks.map((item) => (
    <Link
      key={item.path}
      to={item.path}
      onClick={() => setMenuOpen(false)}
      style={{
        color:
          location.pathname === item.path
            ? COLORS.orange
            : "#fff",
        fontSize: "22px",
        padding: "15px 0",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        fontFamily: "Oswald",
      }}
    >
      {item.title}
    </Link>
  ))}

  <Link
    to="/contact"
    onClick={() => setMenuOpen(false)}
    className="btn-primary"
    style={{ marginTop: "30px" }}
  >
    Book Now
  </Link>
</div>


    </>
  );
}