import COLORS from "../styles/colors";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";

export default function Terms() {
  return (
    <div>

      {/* HERO */}

      <section
        style={{
          background: COLORS.dark,
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
            Terms & Conditions
          </SectionLabel>

          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              color: COLORS.offwhite,
              fontSize: "clamp(2.5rem,5vw,4rem)",
            }}
          >
            Terms &
            <br />

            <span style={{ color: COLORS.orange }}>
              Conditions
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
          Terms of Service
        </SectionHeading>

        <PistonDivider />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 35,
            color: COLORS.midgray,
            lineHeight: 1.9,
          }}
        >
          <div>
            <h3>1. Acceptance</h3>

            <p>
              By using our website and
              booking our services,
              you agree to these
              Terms & Conditions.
            </p>
          </div>

          <div>
            <h3>2. Services</h3>

            <p>
              Shiva Automotive provides
              vehicle repair,
              maintenance,
              diagnostics,
              inspection and
              automotive related services.
            </p>
          </div>

          <div>
            <h3>3. Payments</h3>

            <p>
              All service charges
              must be paid after
              completion of work
              unless otherwise agreed.
            </p>
          </div>

          <div>
            <h3>4. Warranty</h3>

            <p>
              Warranty applies only
              where specifically
              mentioned on the invoice
              or service agreement.
            </p>
          </div>

          <div>
            <h3>5. Liability</h3>

            <p>
              We are not responsible
              for indirect or
              consequential damages
              beyond the scope of
              the agreed service.
            </p>
          </div>

          <div>
            <h3>6. Website Usage</h3>

            <p>
              Users must not misuse,
              copy or attempt to
              damage the website
              or its services.
            </p>
          </div>

          <div>
            <h3>7. Changes</h3>

            <p>
              These terms may be
              updated without prior
              notice whenever required.
            </p>
          </div>

          <div>
            <h3>8. Contact</h3>

            <p>
              For questions regarding
              these Terms &
              Conditions,
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