import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import COLORS from "../styles/colors";
import useScrollReveal from "../hooks/useScrollReveal";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";

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
      title: "Expert Technicians",
      desc:
        "Certified mechanics with 10+ years of experience across all vehicle brands.",
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      desc:
        "Fast servicing so your vehicle gets back on the road quickly.",
    },
    {
      icon: "🛡️",
      title: "Quality Guaranteed",
      desc:
        "Every repair is backed by our service warranty.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
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
          height: "100vh",
          minHeight: 560,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: COLORS.dark,
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
            rgba(232,83,10,.04) 40px,
            rgba(232,83,10,.04) 41px
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
            width: 6,
            background: COLORS.orange,
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            width: "100%",
          }}
        >
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
            Indore's Trusted Auto Workshop
          </p>

          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem,8vw,6rem)",
              color: COLORS.offwhite,
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            SHIVA
            <br />
            <span style={{ color: COLORS.orange }}>
              AUTO
            </span>
            MOTIVE
          </h1>

          <p
            style={{
              color: COLORS.silver,
              fontSize: "1.1rem",
              maxWidth: 520,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Complete vehicle care — from routine
            maintenance to engine repair,
            diagnostics, AC service,
            wheel alignment and genuine
            spare parts.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
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
              Our Services
            </button>
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
            color: COLORS.silver,
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
          background: COLORS.orange,
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
              num: "10+",
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
                textAlign: "center",
                color: "#fff",
              }}
            >
              <p
                style={{
                  fontFamily:
                    "'Oswald',sans-serif",
                  fontSize: "2.8rem",
                  fontWeight: 700,
                }}
              >
                {item.num}
              </p>

              <p>{item.label}</p>
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
                padding: "30px 25px",
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
                  color: COLORS.midgray,
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
          background: COLORS.dark,
          padding: "90px 32px",
          textAlign: "center",
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
            color: COLORS.silver,
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