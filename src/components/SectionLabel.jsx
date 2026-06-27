import COLORS from "../styles/colors";

export default function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: ".8rem",
        letterSpacing: ".18em",
        color: COLORS.orange,
        textTransform: "uppercase",
        marginBottom: "10px",
      }}
    >
      {children}
    </p>
  );
}