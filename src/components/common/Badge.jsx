const Badge = ({ children }) => {
  return (
    <span
      className="
        px-4
        py-2
        rounded-full
        bg-white
        border
        border-[var(--color-border)]
        text-sm
        font-medium
      "
    >
      {children}
    </span>
  );
};

export default Badge;