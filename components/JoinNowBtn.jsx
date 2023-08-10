import { Link } from "react-scroll";

function JoinNowBtn() {
  return (
    <Link
      className="block text-center text-lg xl:text-[32px] uppercase font-bold w-full md:w-[230px] xl:w-[294px] cursor-pointer
        transition px-16 py-[12.5px] md:py-[11px] xl:py-[21.5px] bg-btn-join bg-left-right bg-no-repeat hover:bg-btn-join-focus"
      to="contacts"
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
    >
      join now
    </Link>
  );
}

export default JoinNowBtn;
