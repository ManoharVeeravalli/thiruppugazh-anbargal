import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import banner1 from "../public/images/carosal/banner1.webp";
import banner3 from "../public/images/carosal/banner3.webp";
import banner4 from "../public/images/carosal/banner4.webp";

export default function Carosal() {
  return (
    <Carousel
      autoPlay
      interval={3000}
      fullHeightHover={false}
      indicators={false}
    >
      <Image  src={banner1} alt="banner" />
      <Image  src={banner3} alt="banner" />
      <Image  src={banner4} alt="banner" />
    </Carousel>
  );
}
