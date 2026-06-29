import useScrollReveal from "../hooks/useScrollReveal";
import COLORS from "../styles/colors";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  const timeline = [
    {
      year: "2020",
      title: "Company Started",
      desc: "Shiva Automotive started with a vision to provide honest and reliable vehicle servicing."
    },
    {
      year: "2022",
      title: "Workshop Expansion",
      desc: "Expanded our workshop with advanced diagnostic machines and skilled technicians."
    },
    {
      year: "2025",
      title: "5000+ Happy Customers",
      desc: "Successfully serviced thousands of vehicles with customer-first service."
    },
    {
      year: "2026",
      title: "Modern Automotive Center",
      desc: "Providing complete multi-brand automotive repair and maintenance solutions."
    }
  ];

  return (
    <div>

      {/* Hero */}

      <section
        style={{
          background:"#fff",
          padding: "160px 32px 90px",
          position: "relative",
          overflow: "hidden",
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
            About Us
          </SectionLabel>

          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              color: COLORS.offwhite,
              fontSize: "clamp(2.5rem,5vw,4rem)",
              lineHeight: 1.1,
            }}
          >
            We Keep
            <br />
            Your Vehicle
            <span style={{ color: COLORS.orange }}>
              {" "}Running
            </span>
          </h1>
        </div>
      </section>

      {/* Company Intro */}

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "90px 32px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: 60,
          alignItems: "center",
        }}
      >

        <div
          ref={leftRef}
          className="reveal"
        >
          <SectionLabel>
            Who We Are
          </SectionLabel>

          <SectionHeading>
            Trusted Automotive
            <br />
            Experts
          </SectionHeading>

          <PistonDivider />

          <p
            style={{
              color: COLORS.midgray,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Shiva Automotive has been serving
            customers with reliable,
            transparent and affordable
            automotive services for many years.
          </p>

          <p
            style={{
              color: COLORS.midgray,
              lineHeight: 1.8,
            }}
          >
            Whether it is routine maintenance,
            engine diagnostics,
            brake repair,
            AC servicing or complete vehicle
            inspection,
            our experienced technicians ensure
            every vehicle leaves our workshop
            in excellent condition.
          </p>

        </div>

        <div
          ref={rightRef}
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 25,
          }}
        >
          <div
            className="service-card"
            style={{ padding: 25 }}
          >
            <h3
  style={{
    color: COLORS.dark,
    fontSize: "24px",
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "700",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <span style={{ fontSize: "26px" }}>🎯</span>
  Our Mission
</h3>

            <p
              style={{
                marginTop: 12,
                color:"#4B5563",
                lineHeight: 1.7,
              }}
            >
              Deliver trusted automotive
              services with transparency,
              honesty and quality workmanship.
            </p>
          </div>

          <div
            className="service-card"
            style={{ padding: 25 }}
          >
            <h3
  style={{
    color: COLORS.dark,
    fontSize: "24px",
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "700",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <span style={{ fontSize: "26px" }}>👁</span>
  Our Vision
</h3>

            <p
              style={{
                marginTop: 12,
                color: "#4B5563",
                lineHeight: 1.7,
              }}
            >
              Become the most trusted
              multi-brand automotive workshop
              in Central India.
            </p>
          </div>

          <div
            className="service-card"
            style={{ padding: 25 }}
          >
            <h3
  style={{
    color: COLORS.dark,
    fontSize: "24px",
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "700",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <span style={{ fontSize: "26px" }}>⭐</span>
  Our Values
</h3>

            <p
              style={{
                marginTop: 12,
                color: "#4B5563",
                lineHeight: 1.7,
              }}
            >
              Quality • Trust • Transparency •
              Customer Satisfaction
            </p>
          </div>

        </div>

      </section>
            {/* ================= COMPANY JOURNEY ================= */}

      <section
        style={{
          background: "#fff",
          padding: "90px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <SectionLabel>
            Our Journey
          </SectionLabel>

          <SectionHeading>
            Milestones That
            <br />
            Define Us
          </SectionHeading>

          <PistonDivider />

          <div
            ref={timelineRef}
            className="reveal"
            style={{
              position: "relative",
              marginTop: 50,
              borderLeft: `4px solid ${COLORS.orange}`,
              paddingLeft: 35,
            }}
          >
            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 50,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -44,
                    top: 4,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: COLORS.orange,
                  }}
                />

                <h3
                  style={{
                    fontFamily: "'Oswald',sans-serif",
                    fontSize: "1.4rem",
                    color: COLORS.orange,
                    marginBottom: 6,
                  }}
                >
                  {item.year}
                </h3>

                <h4
  style={{
    marginBottom: 10,
    color: COLORS.offwhite,
    fontFamily: "'Oswald', sans-serif",
    fontSize: "1.3rem",
    fontWeight: "600",
  }}
>
  {item.title}
</h4>

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
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

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
          What Makes
          <br />
          Us Different
        </SectionHeading>

        <PistonDivider />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            {
              icon: "🔧",
              title: "Experienced Team",
              desc: "Certified mechanics with years of practical automotive experience."
            },
            {
              icon: "🚗",
              title: "Multi Brand Service",
              desc: "Repair & maintenance for almost every car manufacturer."
            },
            {
              icon: "⚙️",
              title: "Latest Equipment",
              desc: "Modern diagnostic tools for accurate fault detection."
            },
            {
              icon: "🛡️",
              title: "Guaranteed Quality",
              desc: "Reliable workmanship with customer satisfaction guarantee."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="service-card"
              style={{
                padding: 30,
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: 18,
                }}
              >
                {item.icon}
              </div>

              <h3
  style={{
    fontFamily: "'Oswald', sans-serif",
    fontSize: "24px",
    fontWeight: "700",
    color: "#1A1A2E", // Dark blue
    marginBottom: "15px",
  }}
>
  {item.title}
</h3>

              <p
  style={{
    color: "#555",
    lineHeight: 1.8,
    fontSize: "16px",
  }}
>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section
        style={{
          background: COLORS.orange,
          padding: "70px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {[
            ["5000+", "Vehicles Serviced"],
            ["10+", "Years Experience"],
            ["25+", "Expert Mechanics"],
            ["100%", "Customer Satisfaction"],
          ].map((item) => (
            <div key={item[1]}>
              <h2
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "3rem",
                  color: "#fff",
                }}
              >
                {item[0]}
              </h2>

              <p
                style={{
                  color: "#fff",
                  marginTop: 10,
                }}
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}