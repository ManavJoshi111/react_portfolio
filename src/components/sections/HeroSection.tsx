const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col justify-center items-start px-4 sm:px-10 md:px-20">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Manav</h1>
      <span className="block text-lg sm:text-xl md:text-2xl pt-3">
        I'm a software engineer with a passion for building web applications.
      </span>
      {/* <Button className="px-5 py-3 sm:px-6 sm:py-4 font-medium text-lg sm:text-xl mt-6">
        Download CV
      </Button> */}
    </section>
  );
};

export default HeroSection;
