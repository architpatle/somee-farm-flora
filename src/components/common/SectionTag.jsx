const SectionTag = ({ children }) => {
  return (
    <span
      className="
        inline-flex
        items-center
        px-4
        py-2
        rounded-full
        bg-white
        border
        border-[var(--color-border)]
        text-[12px]
        tracking-[2px]
        uppercase
        font-semibold
        text-[var(--color-accent)]
      "
    >
      {children}
    </span>
  );
};

export default SectionTag;