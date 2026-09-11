export function SpotlightGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(500px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(42,42,42,0.06), transparent 70%)",
      }}
    />
  );
}
