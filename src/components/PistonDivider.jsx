import { useEffect, useRef } from "react";

export default function PistonDivider() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="piston-divider"
      style={{ marginBottom: "48px" }}
    >
      <div className="piston-dot"></div>

      <div
        className="piston-line"
        style={{ animationDelay: ".1s" }}
      ></div>

      <div className="piston-dot"></div>

      <div
        className="piston-line"
        style={{ animationDelay: ".3s" }}
      ></div>
    </div>
  );
}