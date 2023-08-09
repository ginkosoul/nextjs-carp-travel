import JoinNowBtn from "./JoinNowBtn";
import NavBar from "./NavBar";

function Hero() {
  return (
    <section className="bg-hero-image min-h-screen bg-cover bg-center">
      <NavBar />
      <div className="flex flex-col md:flex-row gap-4 container">
        <div className="md:hidden w-[113px] md:w-[221px] xl:w-[294px] text-[37px] font-thin md:title uppercase self-end leading-none max-md:tracking-wide max-xl:md:tracking-[0.13em]">
          <span className="font-medium leading-none tracking-normal">7</span>
          days
          <p className="text-xs md:text-sm xl:text-base leading-none tracking-[0.79em] md:tracking-[25.9px]">
            journey
          </p>
        </div>
        <div className="md:flex md:flex-col md:justify-between">
          <h1 className="title">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="text-[10px] md:text-sm xl:text-base leading-4 font-extralight w-[157px] md:w-[264px] xl:w-full md:tracking-[0.09em] md:mt-auto">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="md:w-[230px] xl:w-[295px]">
          <p className="hidden md:block text-center title uppercase max-xl:md:tracking-[0.13em] -mb-[0.1em]">
            <span className="font-medium leading-none tracking-normal">7</span>
            days
          </p>
          <p className="hidden md:block text-sm xl:text-base/none font-light uppercase leading-none tracking-[1.85em] xl:tracking-[2.28em] mb-14 xl:mb-[180px]">
            journey
          </p>
          <p className="font-extralight text-sm text-justify md:text-base/5 xl:text-lg/6 mb-6 md:mb-7">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <JoinNowBtn />
        </div>
      </div>
    </section>
  );
}

export default Hero;
