import { useState } from "react";

import COLORS from "../styles/colors";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import PistonDivider from "../components/PistonDivider";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {

  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We will contact you shortly.");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

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
            Contact Us
          </SectionLabel>

          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              color: COLORS.dark,
              fontSize: "clamp(2.5rem,5vw,4rem)",
            }}
          >
            Let's Get
            <br />

            Your Vehicle
            <span style={{ color: COLORS.orange }}>
              {" "}
              Back On Road
            </span>
          </h1>
        </div>
      </section>

      {/* CONTACT */}

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "90px 32px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: 60,
        }}
      >

        {/* LEFT */}

        <div
          ref={leftRef}
          className="reveal"
        >
          <SectionLabel>
            Contact Details
          </SectionLabel>

          <SectionHeading>
            Visit Our
            <br />
            Workshop
          </SectionHeading>

          <PistonDivider />

          <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginTop: "25px",
  }}
>

           <div className="service-card">
  <strong>📍 Workshop Address</strong>

  <p style={{ marginTop: 10 }}>
    Plot Khasra No. 92,
    <br />
    Village Khopli NH-353,
    <br />
    Bagbahara,
    <br />
    Chhattisgarh - 493449
  </p>
</div>

            <div className="service-card">
  <strong>📞 Workshop Manager</strong>

  <p style={{ marginTop: 10 }}>
    +91 8518031111
  </p>
</div>

<div className="service-card">
  <strong>📞 Floor Supervisor</strong>

  <p style={{ marginTop: 10 }}>
    +91 8518091111
  </p>
</div>

            <div className="service-card">
  <strong>✉ Email</strong>

  <p style={{ marginTop: 10 }}>
    automotive.shiva@gmail.com
    <br />
    service@shivaautomotive.in
  </p>
</div>

            <div className="service-card">
  <strong>🕒 Working Hours</strong>

  <p style={{ marginTop: 10 }}>
    Monday – Saturday
    <br />
    9:00 AM – 7:00 PM
  </p>
</div>

          </div>

          

        </div>

        {/* RIGHT */}

        <div
          ref={rightRef}
          className="reveal"
        >

          <SectionLabel>
            Send Message
          </SectionLabel>

          <SectionHeading>
            Schedule Your
            <br />
            Service
          </SectionHeading>

          <PistonDivider />

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">
                Select Service
              </option>

              <option>Periodic Maintenance</option>

              <option>Genuine Leyparts</option>

              <option>Vehicle Inspection</option>

              <option>Body Repair</option>

              <option>Insurance Claim</option>

            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
            />

            <button
              className="btn-primary"
              type="submit"
            >
              Book Appointment →
            </button>

          </form>

        </div>

      </section>

{/* ================= GOOGLE MAP ================= */}

<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto 90px",
    padding: "0 32px",
  }}
>
  <SectionLabel>
    Find Us
  </SectionLabel>

  <SectionHeading>
    Visit Our Workshop
  </SectionHeading>

  <PistonDivider />

  <div
    style={{
      height: "320px",
      borderRadius: "20px",
      overflow: "hidden",
      border: "1px solid #E5E7EB",
      boxShadow: "0 15px 40px rgba(0,0,0,.12)",
    }}
  >
    <iframe
      title="Shiva Automotive Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123!2d82.4297391!3d21.0178484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26095e8146dbed%3A0xc96ed4e01c4fda11!2sShiva%20Automotive%20Ashok%20Leyland%20Dealership%20Service%20And%20Spares!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{
        border: 0,
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>

</div>
    
  );

}