import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  ...props
}) => {
  const variants = {
    primary: `
      bg-[var(--color-accent)]
      text-white
      hover:bg-[var(--color-accent-dark)]
      shadow-accent
    `,

    secondary: `
      bg-[var(--color-primary)]
      text-white
      hover:bg-[var(--color-primary-light)]
    `,

    outline: `
      border
      border-[var(--color-primary)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-white
    `,

    ghost: `
      text-[var(--color-primary)]
      hover:bg-gray-100
    `,
  };

  return (
    <button
      className={clsx(
        `
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        rounded-full
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;