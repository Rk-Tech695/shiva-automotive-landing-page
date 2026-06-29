import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import COLORS from "../styles/colors";
import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";
import workshopFront from "../assets/workshop1.jpeg";
import workshopGate from "../assets/workshop2.jpeg";
export default function Home() {
  const navigate = useNavigate();

  const heroRef = useRef(null);

  const stat1 = useScrollReveal();
  const stat2 = useScrollReveal();
  const stat3 = useScrollReveal();

  useEffect(() => {
    const el = heroRef.current;

    if (!el) return;

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    {
      icon: "🔧",
      title: "Ashok Leyland Certified Technicians",
      desc:
        "Certified mechanics with 10+ years of experience across all vehicle brands.",
    },
    {
      icon: "⚡",
      title: "Fast Vehicle Delivery",
      desc:
        "Fast servicing so your vehicle gets back on the road quickly.",
    },
    {
      icon: "🛡️",
      title: "Genuine Leyparts",
      desc:
        "Every repair is backed by our service warranty.",
    },
    {
      icon: "💰",
      title: "Transparent Billing",
      desc:
        "No hidden charges. Clear estimates before work starts.",
    },
  ];

  return (
    
    <div>

      {/* ================= HERO ================= */}

      <section
        style={{
          position: "relative",
          minHeight:"750px",
          paddingTop:"100px",
          paddingBottom:"80px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#fff",
          backgroundImage:"linear-gradient(to bottom,#ffffff,#f8fafc)"
        }}
      >

        <div
          ref={heroRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
repeating-linear-gradient(
45deg,
transparent,
transparent 40px,
rgba(0,0,0,.03) 40px,
rgba(0,0,0,.03) 41px
)
`,
            willChange: "transform",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: COLORS.orange,
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <div>
            <p
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontSize: ".85rem",
              letterSpacing: ".2em",
              color: COLORS.orange,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            BAGBAHARA'S Trusted Auto Workshop
          </p>

          <h1
  style={{
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(3rem,8vw,6rem)",
    lineHeight: 1.05,
    marginBottom: 28,
  }}
>
  <span style={{ color: COLORS.orange }}>
    SHIVA
  </span>

  <br />

  <span style={{ color: COLORS.blue }}>
    AUTOMOTIVE
  </span>
</h1>
<div
className="hero-grid"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 18px",
    background: "#F8FAFC",
    border: "1px solid #E5E7EB",
    borderRadius: "30px",
    marginBottom: "25px",
    fontWeight: "600",
    color: "#334155",
    boxShadow: "0 5px 15px rgba(0,0,0,.06)",
  }}
>
  ✅ Ashok Leyland Authorized Service Partner
</div>

          <p
            style={{
              color: "#475569",
              fontSize: "1.1rem",
              maxWidth: "600px",
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Ashok Leyland Authorized Service &
            Spare Parts Center providing
            complete commercial vehicle
            maintenance, diagnostics,
            engine repair, wheel alignment,
            genuine Leyparts and expert
            after-sales support.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Book a Service →
            </button>

            <button
              className="btn-outline"
              onClick={() => navigate("/services")}
            >
             Explore Services →
            </button>
          </div>
          </div>
          <div className="hero-images"
  style={{
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "520px",
  }}
>
  {/* Main Workshop Image */}
  <img
    src={workshopFront}
    alt="Shiva Automotive Workshop"
    style={{
      width: "100%",
      maxWidth: "560px",
      height: "430px",
      borderRadius: "20px",
      boxShadow: "0 25px 60px rgba(0,0,0,.18)",
      objectFit: "cover",
      border:"8px solid white",
    }}
  />

  {/* Floating Image */}
  <img
    src={workshopGate}
    alt="Workshop Entrance"
    style={{
      position: "absolute",
      width: "260px",
      height: "170px",
      right: "-30px",
      bottom: "-30px",
      borderRadius: "16px",
      border: "6px solid white",
      boxShadow: "0 20px 45px rgba(0,0,0,.18)",
      objectFit: "cover",
      background:"#fff",
    }}
  />
</div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color:"#475569",
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: `linear-gradient(${COLORS.orange},transparent)`,
            }}
          />

          Scroll
        </div>

      </section>

      {/* ================= STATS ================= */}

      <section
        style={{
          background: "#F8FAFC",
          borderTop:"1px solid #E5E7EB",
          borderBottom:"1px solid #E5E7EB",
          padding: "48px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: 32,
          }}
        >
          {[
            {
              num: "6+",
              label: "Years in Business",
              ref: stat1,
            },
            {
              num: "5000+",
              label: "Vehicles Serviced",
              ref: stat2,
            },
            {
              num: "100%",
              label: "Customer Satisfaction",
              ref: stat3,
            },
          ].map((item) => (
            <div
              key={item.label}
              ref={item.ref}
              className="reveal"
              style={{
background:"#fff",
padding:"30px",
borderRadius:"16px",
boxShadow:"0 8px 25px rgba(0,0,0,.08)",
textAlign:"center"
}}
            >
              <p
                style={{
                fontFamily:"Oswald",
                fontSize:"2.8rem",
                fontWeight:700,
                color:COLORS.orange
                }}
              >
                {item.num}
              </p>

              <p style={{color:"#64748B"}}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
            {/* ================= WHY CHOOSE US ================= */}

      <section
        style={{
          padding: "100px 32px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <SectionLabel>
          Why Shiva Automotive
        </SectionLabel>

        <SectionHeading>
          Built on Trust,
          <br />
          Driven by Quality
        </SectionHeading>

        <PistonDivider />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: 32,
          }}
        >
          {features.map((item, index) => (
            <div
              key={item.title}
              className="service-card"
              style={{
                      background:"#fff",
                      border:"1px solid #E5E7EB",
                      borderRadius:"16px",
                      padding:"30px",
                      boxShadow:"0 10px 25px rgba(0,0,0,.06)",
                      transition:".3s"
                    }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: 15,
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily:
                    "'Oswald',sans-serif",
                  fontSize: "1.2rem",
                  marginBottom: 10,
                  color: COLORS.dark,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color:"#64748B",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        style={{
          background: "#1E3A6A",
          padding: "90px 32px",
          textAlign: "center",
          backgroundImage:"linear-gradient(135deg,#1E3A8A,#2563EB)"
        }}
      >
        <SectionLabel>
          Ready To Roll?
        </SectionLabel>

        <SectionHeading light>
          Your Vehicle Deserves
          <br />
          The Best Care
        </SectionHeading>

        <p
          style={{
            color:"#E2E8F0",
            maxWidth: 700,
            margin: "0 auto 35px",
            lineHeight: 1.8,
          }}
        >
          Call us today or visit our workshop
          for reliable automotive repair,
          maintenance and genuine spare
          parts.
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/contact")}
        >
          Contact Us →
        </button>
      </section>
          </div>
  );
}