import CareerForm from "./CareerForm";

function CareerSection() {
  return (
    <>
      <section
        id="career"
        className="bg-career-image min-h-screen bg-cover bg-center py-14 md:py-16 xl:py-[104px]"
      >
        <div className="container">
          <div className="mb-9 md:flex">
            <h2 className="title uppercase mb-6">
              Choose<span className="font-medium"> US</span>
            </h2>
            <p className="main-text w-[180px] md:w-[221px] ml-auto">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.{" "}
            </p>
          </div>
          <div className="md:flex flex-wrap xl:justify-between md:gap-5 xl:gap-6">
            <div className="">
              <h3 className="text-3xl xl:text-4xl/[39px] font-extralight uppercase mb-9 w-[180px] md:w-[221px] xl:w-[292px] ml-auto xl:ml-0 md:text-end">
                Why us ?
              </h3>
              <Advantage />
            </div>
            <CareerForm className="hidden md:block md:h-[408px] md:self-end" />
          </div>
        </div>
      </section>
      <CareerForm className="bg-career-image min-h-screen bg-cover bg-center px-5 py-14 md:hidden" />
    </>
  );
}

export default CareerSection;

const advantages = [
  {
    title: "Professional development",
    text: "We offer growth opportunities and a creative environment to nurture your talents.",
  },
  {
    title: "Teamwork",
    text: "Join our close-knit family, where support and inspiration abound.",
  },
  {
    title: "Stimulating work environment",
    text: "Flexibility and remote options for a comfortable experience.",
  },
  {
    title: "Exciting challenges",
    text: "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
  },
];

function Advantage() {
  return (
    <ul className="flex flex-col gap-4 md:gap-6 md:h-[408px]">
      {advantages.map(({ title, text }) => (
        <li key={title} className="xl:flex xl:gap-6">
          <h4 className="main-text font-normal w-[180px] md:w-[221px] xl:w-[292px] mb-2 xl:mb-0 text-end">
            {title}
          </h4>
          <p className="text-xs/5 font-extralight w-[180px] md:w-[221px] xl:w-[285px] text-end xl:text-start">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}
