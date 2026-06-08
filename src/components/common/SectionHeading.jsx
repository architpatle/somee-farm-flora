import SectionTag from "./SectionTag";

const SectionHeading = ({
  tag,
  title,
  description,
  center = false,
}) => {
  return (
    <div
      className={`
        ${center ? "text-center mx-auto" : ""}
        max-w-3xl
      `}
    >
      {tag && (
        <div className="mb-5">
          <SectionTag>{tag}</SectionTag>
        </div>
      )}

      <h2
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            text-[var(--color-text-light)]
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;