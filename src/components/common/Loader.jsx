const Loader = () => {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        py-20
      "
    >
      <div
        className="
          h-10
          w-10
          rounded-full
          border-4
          border-[var(--color-accent)]
          border-t-transparent
          animate-spin
        "
      />
    </div>
  );
};

export default Loader;