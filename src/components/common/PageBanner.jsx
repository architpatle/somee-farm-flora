import Container from "./Container";

const PageBanner = ({
  title,
  description,
}) => {
  return (
    <section
      className="
        pt-40
        pb-24
        bg-[var(--gradient-hero)]
      "
    >
      <Container>
        <div className="max-w-3xl">
          <h1
            className="
              text-5xl
              lg:text-7xl
              font-bold
            "
          >
            {title}
          </h1>

          {description && (
            <p
              className="
                mt-6
                text-xl
              "
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageBanner;