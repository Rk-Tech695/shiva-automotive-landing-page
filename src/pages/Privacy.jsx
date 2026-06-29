import COLORS from "../styles/colors";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";

export default function Privacy() {
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
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <SectionLabel>
            Privacy Policy
          </SectionLabel>

          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              color: COLORS.offwhite,
              fontSize: "clamp(2.5rem,5vw,4rem)",
            }}
          >
            Your Privacy
            <br />

            Matters To
            <span style={{ color: COLORS.orange }}>
              {" "}Us
            </span>

          </h1>
        </div>
      </section>

      {/* CONTENT */}

      <section
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "90px 32px",
        }}
      >

        <SectionHeading>
          Privacy Policy
        </SectionHeading>

        <PistonDivider />

        <div
          style={{
            color: COLORS.midgray,
            lineHeight: 1.9,
            display: "flex",
            flexDirection: "column",
            gap: 35,
          }}
        >

          <div>
            <h3>1. Information We Collect</h3>

            <p>
              We collect information such as
              your name, phone number,
              email address and vehicle
              details whenever you contact us
              or book a service.
            </p>
          </div>

          <div>
            <h3>2. How We Use Information</h3>

            <p>
              Your information is used only
              for booking services,
              communicating updates and
              improving customer support.
            </p>
          </div>

          <div>
            <h3>3. Data Protection</h3>

            <p>
              We never sell your personal
              information and always use
              secure methods to protect it.
            </p>
          </div>

          <div>
            <h3>4. Cookies</h3>

            <p>
              Our website may use cookies
              for analytics and improving
              user experience.
            </p>
          </div>

          <div>
            <h3>5. Third Party Services</h3>

            <p>
              Some external services like
              Google Maps may collect
              limited information according
              to their own privacy policies.
            </p>
          </div>

          <div>
            <h3>6. Contact</h3>

            <p>
              For any privacy related query,
              contact us at
              <br />

              <strong>
                info@shivaautomotive.in
              </strong>
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}