import COLORS from "../styles/colors";



export default function SectionHeading({ children, light }) {
  return (
    <h2
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(2rem,4vw,3rem)",
        color: light ? "#fff" : COLORS.offwhite,
        lineHeight: 1.2,
        marginBottom: 20,
      }}
    >
      {children}
    </h2>
  );
}