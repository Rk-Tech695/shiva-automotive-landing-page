import { useNavigate } from "react-router-dom";

import COLORS from "../styles/colors";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";
import useScrollReveal from "../hooks/useScrollReveal";
import clutch from "../assets/clutch.jpg";
import airFilter from "../assets/air-filter.jpg";
import piston from "../assets/piste-set.jpg";
import gears from "../assets/gears-thumb.jpg";
import oil from "../assets/oil-fuel-filter.jpg";
import crown from "../assets/crown-wheel.jpg";
import bearings from "../assets/bearings-thump.jpg";
import brake from "../assets/break-lining.jpg";

export default function Services() {

  const navigate = useNavigate();
  const leyparts = [
  {
    image: clutch,
    title: "Clutch Disc",
  },
  {
    image: airFilter,
    title: "Air Filter",
  },
  {
    image: piston,
    title: "Piston Set",
  },
  {
    image: gears,
    title: "Gears & Shafts",
  },
  {
    image: oil,
    title: "Oil & Fuel Filters",
  },
  {
    image: crown,
    title: "Crown Wheel Pinion",
  },
  {
    image: bearings,
    title: "Bearings",
  },
  {
    image: brake,
    title: "Brake Lining",
  },
];

  const services = [
    {
      icon: "🔧",
      title: "Engine Repair",
      desc: "Complete engine diagnostics, overhaul and repair using advanced equipment.",
    },
    {
      icon: "🛞",
      title: "Tyre Services",
      desc: "Wheel balancing, alignment, tyre replacement and puncture repair.",
    },
    {
      icon: "🛢️",
      title: "Oil Change",
      desc: "Premium engine oil replacement with genuine filters.",
    },
    {
      icon: "❄️",
      title: "AC Service",
      desc: "Cooling inspection, gas refilling and compressor repair.",
    },
    {
      icon: "⚙️",
      title: "Transmission",
      desc: "Gearbox inspection and transmission maintenance.",
    },
    {
      icon: "🔋",
      title: "Battery Check",
      desc: "Battery replacement, charging system and alternator testing.",
    },
    {
      icon: "🛑",
      title: "Brake Service",
      desc: "Brake pads, discs, oil replacement and complete brake inspection.",
    },
    {
      icon: "🚗",
      title: "Periodic Service",
      desc: "Complete scheduled servicing for all vehicle brands.",
    },
  ];

  return (
    <div>

      {/* HERO */}

      <section
        style={{
          background:"#fff",
          padding: "120px 32px 90px",
          position: "relative",
        }}
      >
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
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <SectionLabel>
            Our Services
          </SectionLabel>

          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              color: COLORS.offwhite,
              fontSize: "clamp(2.6rem,5vw,4rem)",
              lineHeight: 1.1,
            }}
          >
            Complete
            <br />

            Automotive
            <span style={{ color: COLORS.orange }}>
              {" "}
              Solutions
            </span>
          </h1>

        </div>

      </section>

      {/* SERVICES */}

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "90px 32px",
        }}
      >

        <SectionLabel>
          What We Offer
        </SectionLabel>

        <SectionHeading>
          Quality Service
          <br />
          For Every Vehicle
        </SectionHeading>

        <PistonDivider />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: 30,
          }}
        >
          {services.map((item) => {

            const ref = useScrollReveal();

            return (

              <div
                key={item.title}
                ref={ref}
                className="service-card"
                style={{
                  padding: 30,
                }}
              >

                <div
                  style={{
                    fontSize: "2.8rem",
                    marginBottom: 18,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Oswald',sans-serif",
                    marginBottom: 12,
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

            );

          })}
        </div>

      </section>
            {/* ================= PRODUCTS ================= */}

      <section
        style={{
          background: COLORS.lightgray,
          padding: "90px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <SectionLabel>
            Genuine Products
          </SectionLabel>

          <SectionHeading>
             Leyparts Genuine Spare Parts
          </SectionHeading>

          <PistonDivider />

          <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
    marginTop: "40px",
  }}
>
  {leyparts.map((item) => (
    <div
      key={item.title}
      className="service-card"
      style={{
        overflow: "hidden",
        padding: "0",
        background: "#fff",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          padding: "20px",
        }}
      />

      <h3
        style={{
          padding: "18px",
          textAlign: "center",
          fontFamily: "Oswald",
          color: "#111827",
        }}
      >
        {item.title}
      </h3>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ================= WHY US ================= */}

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "90px 32px",
        }}
      >
        <SectionLabel>
          Why Choose Us
        </SectionLabel>

        <SectionHeading>
          Trusted By
          <br />
          Thousands
        </SectionHeading>

        <PistonDivider />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: 30,
          }}
        >
          {[
            "Experienced Technicians",
            "Latest Equipment",
            "Transparent Pricing",
            "Fast Delivery",
            "Genuine Spare Parts",
            "Customer Satisfaction",
          ].map((item) => (
            <div
              key={item}
              className="service-card"
              style={{
                padding: 30,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  marginBottom: 15,
                }}
              >
                ✅ {item}
              </h3>

              <p
                style={{
                  color: COLORS.midgray,
                  lineHeight: 1.7,
                }}
              >
                We provide professional
                automotive services using
                premium quality parts and
                modern technology.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        style={{
          background: COLORS.dark,
          textAlign: "center",
          padding: "90px 32px",
        }}
      >
        <SectionLabel>
          Need Vehicle Service?
        </SectionLabel>

        <SectionHeading light>
          Book Your
          <br />
          Appointment Today
        </SectionHeading>

        <p
          style={{
            color: COLORS.silver,
            maxWidth: 650,
            margin: "20px auto 35px",
            lineHeight: 1.8,
          }}
        >
          From engine repair to complete
          vehicle maintenance, Shiva
          Automotive is always ready to
          serve you.
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/contact")}
        >
          Contact Now →
        </button>

      </section>

    </div>
  );
}