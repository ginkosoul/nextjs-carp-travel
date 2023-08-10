function AboutSection() {
  return (
    <section
      id="about"
      className="bg-about-image min-h-screen bg-cover bg-center py-14 md:py-16 xl:py-[104px]"
    >
      <div className="px-5 mx-auto md:max-xl:px-8 md:max-w-screen-md xl:max-w-screen-xl">
        <h2 className="title uppercase mb-1 md:-mb-[71.5px] xl:-mb-[105.29px]">
          Who <span className="font-medium">we are</span>
        </h2>
        <div className="mb-10 md:mb-16 xl:mb-0 md:flex md:flex-col-reverse xl:flex-col md:justify-end md:flex-wrap md:h-[436px] xl:h-[600px] xl:w-[503px] xl:ml-auto">
          <div className="max-md:mb-10 md:max-xl:order-1 md:self-end xl:self-start w-[180px] md:w-[221px] xl:w-[292px]">
            <p className="main-text mb-5 md:mb-4">
              <span className="font-normal">a team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="main-text">
              <span className="font-normal">We believe </span>
              that nature has the power to inspire, strengthen character and
              provide new perspectives. Therefore, each of our tours is aimed at
              unlocking your potential, enriching your spiritual world and
              creating unforgettable memories.
            </p>
          </div>
          <div className="main-text max-md:ml-auto w-[180px] md:w-[221px] md:mt-auto xl:self-end">
            <p className="font-normal text-start uppercase">
              From vacationers{" "}
            </p>
            <p className="font-normal text-end uppercase">
              to active travelers
            </p>
            <p className="text-justify tracking-tight">
              we have a tour for everyone.
            </p>
          </div>
        </div>
        <p className="main-text w-[463px] xl:w-[605px] md:ml-auto xl:ml-0 xl:h-20 xl:-mt-20">
          <span className="font-normal">We use methods </span>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
